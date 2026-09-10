// Hides promotional/price-based "families" returned by /api/family that are not real product categories.
const PRICE_PROMO_TITLE_PATTERN = /^(desde|hasta|todo por|de\s+\$)/i;

const filterFamilies = (families) => {
  if (!Array.isArray(families)) return [];

  return families.filter((family) => {
    const title = typeof family?.title === "string" ? family.title : "";
    if (title === "Próximos Arribos") return false;
    if (/\b(19|20)\d{2}\b/.test(title)) return false;
    if (PRICE_PROMO_TITLE_PATTERN.test(title.trim())) return false;

    const excludeKeywords = [
      "Día de la madre",
      "Día del Padre",
      "Día del trabajador",
      "Descuento por color",
    ];
    if (
      excludeKeywords.some((kw) =>
        title.toLowerCase().includes(kw.toLowerCase())
      )
    )
      return false;

    return true;
  });
};

export default filterFamilies;
