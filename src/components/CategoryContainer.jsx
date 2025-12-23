import { useEffect, useMemo, useRef, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((r) => r.json());

const filterFamilies = (families) => {
  if (!Array.isArray(families)) return [];

  return families.filter((family) => {
    const title = typeof family?.title === "string" ? family.title : "";
    if (title === "Próximos Arribos") return false;
    if (/\b(19|20)\d{2}\b/.test(title)) return false;

    const excludeKeywords = [
      "Día de la madre",
      "Día del Padre",
      "Día del trabajador",
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

const chunkIntoColumns = (items, maxPerColumn) => {
  const colCount = 3;
  const columns = Array.from({ length: colCount }, () => []);

  // Fill columns top-to-bottom, left-to-right
  for (let index = 0; index < items.length; index += 1) {
    const col = Math.floor(index / maxPerColumn);
    if (col >= colCount) break;
    columns[col].push(items[index]);
  }

  return columns;
};

const CategoryContainer = ({ setter, link, activeId, className = "" }) => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { data: familyData, isLoading } = useSWR("/api/family", fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 60000,
  });

  useEffect(() => {
    if (familyData?.families) {
      setCategories(filterFamilies(familyData.families));
    }
  }, [familyData]);

  useEffect(() => {
    const onPointerDown = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const maxPerColumn = categories.length > 21 ? 10 : 7;

  const columns = useMemo(
    () => chunkIntoColumns(categories, maxPerColumn),
    [categories, maxPerColumn]
  );

  const handleCategoryClick = (id) => {
    if (`${activeId || ""}` === `${id}`) return;
    if (!link) {
      if (typeof setter === "function") setter(id);
      setIsOpen(false);
      return;
    }

    router.push({
      pathname: "/store",
      query: { family: id },
    });
    setIsOpen(false);
  };

  const activeCategory = useMemo(() => {
    if (!activeId) return null;
    return categories.find((c) => `${c?.id}` === `${activeId}`) || null;
  }, [categories, activeId]);

  return (
    <div className={`w-full ${className} pt-10 pb-20 px-12`}>
      <h1 className="hidden desktop:block text-gray-800 font-extrabold text-[20px] xs:text-center desktop:text-left pb-6 ">CATEGORÍAS</h1>
      {isLoading ? (
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-3">
              {Array.from({ length: maxPerColumn }).map((__, rowIdx) => (
                <div
                  key={rowIdx}
                  className="flex items-center gap-3 animate-pulse"
                >
                  <div className="h-8 w-8 rounded-full bg-gray-300" />
                  <div className="h-4 w-32 rounded bg-gray-300" />
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Mobile/tablet (<1000px): selector compacto */}
          <div className="block desktop:hidden py-3 px-4 " ref={dropdownRef}>
            <label className="block text-center text-2xl font-semibold text-gray-700 mb-8">
              Categorías
            </label>
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <span className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-3 min-w-0">
                  {activeCategory?.icon_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={activeCategory.icon_url}
                      alt={activeCategory.title || "category"}
                      className="h-6 w-6 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-6 w-6 rounded-full bg-gray-200" />
                  )}
                  <span className="truncate text-left">
                    {activeCategory?.title || "Selecciona una categoría"}
                  </span>
                </span>
                <span className="text-gray-500">▾</span>
              </span>
            </button>

            {isOpen ? (
              <div className="relative">
                <div className="absolute left-0 right-0 mt-2 max-h-80 overflow-auto rounded-md border border-gray-200 bg-white shadow-lg z-20">
                  {categories.map((c) => {
                    const isActive = `${activeId || ""}` === `${c.id}`;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        disabled={isActive}
                        onClick={() => handleCategoryClick(c.id)}
                        className={`w-full px-4 py-3 flex items-center gap-3 text-left ${
                          isActive
                            ? "text-teal-700 bg-teal-50 cursor-default"
                            : "text-gray-800 hover:bg-gray-50"
                        }`}
                      >
                        {c.icon_url ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={c.icon_url}
                            alt={c.title || "category"}
                            className="h-6 w-6 object-contain"
                            loading="lazy"
                          />
                        ) : (
                          <div className="h-6 w-6 rounded-full bg-gray-200" />
                        )}
                        <span className="text-sm font-medium">{c.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>

          {/* Desktop (>=1000px): 3 columnas */}
          <div className="hidden desktop:grid grid-cols-1 gap-6">
            {columns.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-3 ">
                {col.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleCategoryClick(category.id)}
                    disabled={`${activeId || ""}` === `${category.id}`}
                    className={`flex items-center  gap-3 text-left transition-colors ${
                      `${activeId || ""}` === `${category.id}`
                        ? "text-teal-700 opacity-70 cursor-default"
                        : "text-gray-800 hover:text-teal-600"
                    }`}
                  >
                    {category.icon_url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={category.icon_url}
                        alt={category.title || "category"}
                        className="h-8 w-8 object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-gray-200" />
                    )}
                    <span className="text-sm font-medium">{category.title}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryContainer;
