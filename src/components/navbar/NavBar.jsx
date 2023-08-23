import React from "react";
import Image from "next/image";
import { BsBag, BsSearch } from "react-icons/bs";
import twentyLogo from "../../../public/assets/logo-twenty-lyrics.svg";
import BtnMenu from "../buttons/BtnMenu";
import Link from "next/link";
import redirectWithScroll from "../../utils/redirectWithScroll";
import { useRouter } from "next/router";
import Cart from "../Cart";
import { useCart } from "@/context/cartContext";

const NavBar = () => {
  const router = useRouter();
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const { cartLength } = useCart();

  React.useEffect(() => {
    
  }, [cartLength]);
  
  


  return (
    <>
      <nav className="relative w-full text-white h-20 md:h-[10vh] bg-gradient-to-t from-[#30807a] via-teal-400 to-teal-200 flex items-center justify-between shadow-sm shadow-black">
        <Link href="/">
          <Image src={twentyLogo} alt="Twenty Logo" className="h-20 w-44" />
        </Link>

        <div className="relative hidden md:flex items-center w-full justify-end px-4 lg:px-9 ">
          <ul className="flex gap-4 lg:gap-7 font-bold text-sm lg:text-lg cursor-pointer">
            <li>
              <Link href="/store">Productos</Link>
            </li>
            <li>
              <button onClick={redirectWithScroll(router, "/", "#catalogues")}>
                Catálogos
              </button>
            </li>
            <li>
              <button onClick={redirectWithScroll(router, "/", "#nosotros")}>
                Nosotros
              </button>
            </li>
            <li>
              <button onClick={redirectWithScroll(router, "/", "#contacto")}>
                Contacto
              </button>
            </li>
            <li>
              <button onClick={() => setIsCartOpen(!isCartOpen)}>
                <BsBag className="text-2xl" />
              </button>
              {cartLength > 0 &&
              <span className="bg-red-600 w-6 h-6 rounded-full text-xs p-1 text-center absolute right-1 lg:right-4 -top-3">{cartLength}</span>
}
            </li>
          </ul>
          <div className="hidden max-w-72 relative">
            <BsSearch className=" text-black absolute top-3 right-3 bg-white" />
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full h-10 rounded-full border-2 border-gray-300 px-4 focus:outline-none focus:border-primary text-black"
            />
          </div>
        </div>

        <div className="relative md:hidden flex items-center gap-3">
          <button onClick={() => setIsCartOpen(!isCartOpen)}>
            <BsBag className="text-2xl md:hidden w-12 " />
          </button>
          {cartLength > 0 && <span className="bg-red-600 w-6 h-6 rounded-full text-xs p-1 text-center absolute left-7 top-0">{cartLength}</span> }
          
          <BtnMenu />
        </div>
      </nav>
      <div className="static z-10 top-0 right-0">
        <Cart isOpen={isCartOpen} closeCart={setIsCartOpen} />
      </div>
    </>
  );
};

export default NavBar;
