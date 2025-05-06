import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const CategoriesProduct = ({ id, title, icon, link, setter }) => {
  const router = useRouter();

  return (
    <button
      className=" flex flex-col items-center justify-center "
      type="button"
      onClick={() => {
        if (!link) {
          setter(id);
        } else {
          router.push({
            pathname: `/store`,
            query: { family: id },
          });
        }
      }}
    >
      <div className=" w-24 h-24 bg-white border-4 hover:shadow-2xl transition-shadow shadow-xl border-primary rounded-full">
        {icon ? (
          <Image
            src={icon}
            width={300}
            height={300}
            alt={title}
            title={title}
            className="p-4"
          />
        ) : null}
      </div>
      <h3 className="text-secondary2 text-sm uppercase mt-5 font-semibold">
        {title}
      </h3>
    </button>
  );
};

export default CategoriesProduct;
