import axios from "axios";

const ZECAT_URL = "https://api.zecat.com/v1/generic_product";
const cache = {};

async function fetchWithRetries(url, token, attempts = 2, timeout = 5000) {
  let lastError;
  for (let i = 0; i < attempts; i++) {
    try {
      const resp = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
        timeout,
      });
      return resp;
    } catch (err) {
      lastError = err;
      await new Promise((r) => setTimeout(r, 300 * (i + 1)));
    }
  }
  throw lastError;
}

export default async function handler(req, res) {
  const { name = "", page = 1 } = req.query;
  const key = `s:name:${name}|p:${page}`;
  try {
    const token = process.env.ZECAT_TOKEN;
    if (!token) return res.status(500).json({ error: "missing_token" });

    const url = `${ZECAT_URL}?name=${encodeURIComponent(name)}&page=${page}`;
    const response = await fetchWithRetries(url, token, 2, 5000);

    try {
      cache[key] = { ts: Date.now(), data: response.data };
    } catch (e) {}

    res.setHeader(
      "Cache-Control",
      "public, max-age=60, s-maxage=60, stale-while-revalidate=300"
    );
    res.status(200).json(response.data);
  } catch (error) {
    const cached = cache[key];
    if (cached && Date.now() - cached.ts < 1000 * 60 * 5) {
      res.setHeader("X-Cache", "HIT-FALLBACK");
      res.setHeader("Cache-Control", "public, max-age=30, s-maxage=30");
      return res.status(200).json(cached.data);
    }

    const status = error?.response?.status || 502;
    const payload = error?.response?.data || { message: error?.message };
    console.error("API product search error:", status, payload);
    res.status(status).json({ error: "fetch_failed", details: payload });
  }
}
