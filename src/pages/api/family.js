import axios from "axios";

const ZECAT_URL = "https://api.zecat.com/v1/family";

export default async function handler(req, res) {
  try {
    const token = process.env.ZECAT_TOKEN;
    if (!token) {
      return res.status(500).json({ error: "missing_token" });
    }

    const response = await axios.get(ZECAT_URL, {
      headers: { Authorization: `Bearer ${token}` },
      timeout: 10000,
    });

    res.setHeader(
      "Cache-Control",
      "public, max-age=300, s-maxage=300, stale-while-revalidate=900"
    );
    res.status(200).json(response.data);
  } catch (error) {
    const status = error?.response?.status || 500;
    const payload = error?.response?.data || { message: error?.message };
    console.error("API family error:", status, payload);
    res.status(status).json({ error: "fetch_failed", details: payload });
  }
}
