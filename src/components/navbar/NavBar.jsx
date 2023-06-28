import React from "react";
import Image from "next/image";
import {
  BsSearch,
} from "react-icons/bs";
import twentyLogo from "../../../public/assets/logo-twenty-lyrics.svg";
import BtnMenu from "@/components/buttons/BtnMenu";

const NavBar = () => {
  return (
    <nav className="w-full h-28 bg-gradient-to-t from-[#30807a] via-teal-400 to-teal-200 flex items-center justify-between shadow-sm shadow-black">
      <Image src={twentyLogo} alt="Twenty Logo" className="h-20 w-44" />

      <div className="hidden md:flex items-end w-full justify-between px-4 lg:px-9 ">
        <ul className="flex gap-4 lg:gap-7 font-medium text-sm lg:text-lg">
          <li>Productos</li>
          <li>Acerca de Twenty</li>
          <li>Contacto</li>
        </ul>
        <div className="max-w-72 relative">
          <BsSearch className="text-black absolute top-3 right-3 bg-white" />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full h-10 rounded-full border-2 border-gray-300 px-4 focus:outline-none focus:border-primary text-black"
          />
        </div>
      </div>

      <BtnMenu />
    </nav>
  );
};

export default NavBar;
