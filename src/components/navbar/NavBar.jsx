import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BsBag, BsSearch } from "react-icons/bs";
import twentyLogo from "../../../public/assets/twentyLOGO.png";
import BtnMenu from "../buttons/BtnMenu";
import Link from "next/link";
import redirectWithScroll from "../../utils/redirectWithScroll";
import { useRouter } from "next/router";
import Cart from "../Cart";
import { useCart } from "@/context/cartContext";
import { Input, List, ListItem, Spinner } from "@material-tailwind/react";
import { BiDownArrow } from "react-icons/bi";
import axios from "axios";

const NavBar = () => {
  const router = useRouter();
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const { cartLength } = useCart();

  React.useEffect(() => {}, [cartLength]);

  const [searchInput, setSearchInput] = useState("");
  const [autocompleteResults, setAutocompleteResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [familyProducts, setFamilyProducts] = useState([]);
  const [isHoveringDropdown, setIsHoveringDropdown] = React.useState(false);
  const [isHoveringButton, setIsHoveringButton] = React.useState(false);

  const searchContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target)
      ) {
        setSearchInput("");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://api.zecatdifapro.com/family");
        setCategories(response.data.families);
      } catch (error) {
        console.error("Error al obtener las categorías", error);
      }
    };

    fetchCategories();
  }, []);
  

  const handleChange = async (event) => {
    const { value } = event.target;
    setSearchInput(value);

    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.zecatdifapro.com/generic_product/autocomplete?name=${value}`
      );
      const data = await response.json();
      setAutocompleteResults(data.generic_products);
      console.log(data.generic_products);
    } catch (error) {
      console.error("Error de autocompletado", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <nav className="relative z-10 w-full !text-white h-20 md:h-[10vh] bg-primary flex items-center justify-between shadow-xl ">
        <Link href="/">
          <Image
            src={twentyLogo}
            alt="Twenty Logo"
            width={500}
            height={500}
            className=" rounded-full ml-3 p-2 md:p-4 w-20 py-1 md:w-22"
          />
        </Link>

        <div className="hidden md:flex items-center w-full justify-end px-4 lg:px-9 ">
          <ul className="flex gap-4 lg:gap-7 font-bold text-sm lg:text-lg cursor-pointer items-center">
            <li>
              <Link href="/store?family=121">Productos</Link>
            </li>
            
            <li>
              <button onClick={redirectWithScroll(router, "/", "#catalogues")}>
                Clientes
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

            <Input
              type="text"
              placeholder="Buscar..."
              className="!border !border-blue-gray-50 bg-white text-blue-gray-500 shadow-lg shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 rounded-sm md:w-[15rem] lg:w-[20rem]"
              labelProps={{
                className: "hidden",
              }}
              value={searchInput}
              onChange={handleChange}
            />
            <li>
              <button onClick={() => setIsCartOpen(!isCartOpen)}>
                <BsBag className="text-2xl" />
              </button>
              {cartLength > 0 && (
                <span className="bg-red-600 w-6 h-6 rounded-full text-xs p-1 text-center absolute right-1 lg:right-4 top-3">
                  {cartLength}
                </span>
              )}
            </li>

            {searchInput && (
              <div
                className="scrollbar absolute bg-white z-10 max-h-36 overflow-y-auto rounded-sm md:w-[15rem] lg:w-[20rem]  border border-blue-gray-200 shadow-md md:top-[3.8rem] md:right-14 lg:top-[3.9rem] lg:right-[88px]"
                ref={searchContainerRef}
              >
                <List>
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <Spinner className="h-8 w-8" color="teal" />
                    </div>
                  ) : (
                    <div>
                      {autocompleteResults.length > 0 ? (
                        <div>
                          {autocompleteResults.map((result, i) => (
                            <Link key={i} href={`/store/${result.id}`}>
                              <ListItem className="cursor-pointer">
                                {result.name}
                              </ListItem>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <p>No hay resultados disponibles....</p>
                      )}
                    </div>
                  )}
                </List>
              </div>
            )}
          </ul>
        </div>

        <div className="relative md:hidden flex items-center gap-3">
          <button onClick={() => setIsCartOpen(!isCartOpen)}>
            <BsBag className="text-2xl md:hidden w-12 " />
          </button>
          {cartLength > 0 && (
            <span className="bg-red-600 w-6 h-6 rounded-full text-xs p-1 text-center absolute left-7 top-0">
              {cartLength}
            </span>
          )}

          <BtnMenu />
        </div>
      </nav>

      {showDropdown && categories.length > 0 && (
        <div
          className="z-20 absolute top-16 left-0 overflow-auto w-full h-[20rem] bg-white border-solid border-[#757575] rounded shadow-md"
          onMouseEnter={() => {
            setShowDropdown(true);
            setIsHoveringDropdown(true);
          }}
          onMouseLeave={() => {
            setIsHoveringDropdown(false);
            setTimeout(() => {
              if (!isHoveringButton) {
                setShowDropdown(false);
              }
            }, 2000);
          }}
        >
          <ul className="py-2 px-4">
            {categories.map((category) => (
              <div key={category.id}>
                <li className="py-2 hover:bg-gray-100 text-black border border-1 p-2">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      router.push({
                        pathname: '/store',
                        query: { family: category.id },
                      });
                    }}
                    className={`block ${selectedCategory === category ? 'font-bold' : ''}`}
                  >
                    {category.title}
                  </a>
                </li>
              </div>
            ))}
          </ul>
        </div>
)}

<div className="static z-10 top-0 right-0">
        <Cart isOpen={isCartOpen} closeCart={setIsCartOpen} />
      </div>
    
    </>
  );
};

export default NavBar;
