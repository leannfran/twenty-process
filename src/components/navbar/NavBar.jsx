import React from "react";
import Image from "next/image";
import { BsBag, BsSearch } from "react-icons/bs";
import twentyLogo from "../../../public/assets/logo-twenty-lyrics.svg";
import BtnMenu from "../buttons/BtnMenu";
import { Link as Scroll} from 'react-scroll'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className="w-full h-20 md:h-[10vh] bg-gradient-to-t from-[#30807a] via-teal-400 to-teal-200 flex items-center justify-between shadow-sm shadow-black">
      
      <Link href='/'>

        <Image src={twentyLogo} alt="Twenty Logo" className="h-20 w-44"/>

      </Link>

      <div className="hidden md:flex items-center w-full justify-end px-4 lg:px-9 ">
        <ul className="flex gap-4 lg:gap-7 font-bold text-sm lg:text-lg cursor-pointer">
          <li><Link className="hover:bg-secondary transition-colors rounded p-0.5" href='/store'>Productos</Link></li>
          <li><Scroll className="hover:bg-secondary transition-colors rounded p-0.5" to="catalogos" spy={true} smooth={true} offset={50} duration={500}>Catálogos</Scroll></li>
          <li><Scroll className="hover:bg-secondary transition-colors rounded p-0.5" to="nosotros" spy={true} smooth={true} offset={50} duration={500}>Nosotros</Scroll></li>
          <li><Scroll className="hover:bg-secondary transition-colors rounded p-0.5" to="contacto" spy={true} smooth={true} offset={50} duration={500}>Contacto</Scroll></li>
        </ul>
        <div className="hidden max-w-72 relative">
          <BsSearch className=" text-black absolute top-3 right-3 bg-white" />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full h-10 rounded-full border-2 border-gray-300 px-4 focus:outline-none focus:border-primary text-black"
          />
        </div>
        <BsBag className=" hidden text-2xl" />
      </div>

      <div className="md:hidden flex items-center gap-3">
        {/*<button>
          <BsBag className="text-2xl md:hidden w-12 " />
  </button>*/}
        <BtnMenu />
      </div>
    </nav>
  );
};

export default NavBar;
