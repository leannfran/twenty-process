import axios from "axios";

const ZECAT_URL = "https://api.zecat.com/v1/generic_product";

export default async function handler(req, res) {
  const { page = 1, family } = req.query;

  try {
    const url = family
      ? `${ZECAT_URL}?families[]=${encodeURIComponent(family)}&page=${page}`
      : `${ZECAT_URL}?page=${page}`;

    const token = process.env.ZECAT_TOKEN;
    if (!token) {
      return res
        .status(500)
        .json({ error: "missing_token", message: "Falta ZECAT_TOKEN en .env.local o entorno de despliegue" });
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      timeout: 10000,
    });

    // Cache en cliente y en plataformas con edge/CDN
    res.setHeader(
      "Cache-Control",
      "public, max-age=60, s-maxage=60, stale-while-revalidate=300"
    );
    res.status(200).json(response.data);
  } catch (error) {
    const status = error?.response?.status || 500;
    const payload = error?.response?.data || { message: error?.message };
    console.error("API products error:", status, payload);
    res.status(status).json({ error: "fetch_failed", details: payload });
  }
}
