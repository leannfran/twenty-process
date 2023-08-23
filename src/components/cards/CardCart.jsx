import React from "react";
import Image from "next/image";
import { IconTrashSvg } from "../Svgs";



const CardCart = ({ id, quantity, title, removeFromCartById , image }) => {


  return (
    <div className="p-2 flex justify-between items-center font-medium gap-2 border bg-gradient-to-t from-[#30807a] via-teal-400 to-teal-200 rounded-lg">
      <div className="flex flex-row gap-2 items-center overflow-hidden">
        <Image
          src={image}
          alt="product image"
          className="rounded-md"
          width={100}
          height={80}
        />
        <div >
          <h3 className="font-extrabold text-black">
            {quantity}x {title} 
          </h3>
          
          
        </div>
      </div>
      {removeFromCartById && <div
        className="w-10 h-10 cursor-pointer"
        onClick={() => {
          removeFromCartById(id)
          
        }}
      >
        <IconTrashSvg />
      </div>}
      
    </div>
  );
};

export default CardCart;