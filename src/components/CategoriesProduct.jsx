import React from "react";
import Image from "next/image";

const CategoriesProduct = ({ title, icon }) => {
  return (
   
      <div className=" flex flex-col items-center justify-center">
        <div className="w-32 h-32 bg-gradient-to-t from-teal-500 to-teal-200 rounded-full">
          <Image
            src={icon}
            width={300}
            height={300}
            alt={title}
            title={title}
            className="p-10"
          />
        </div>
        <h1 className="text-secondary2 uppercase mt-5 font-semibold">
          {title}
        </h1>
      </div>
  );
};

export default CategoriesProduct;
