import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BsBag, BsSearch } from "react-icons/bs";
import twentyLogo from "../../../public/assets/logo-twenty-lyrics.svg";
import BtnMenu from "../buttons/BtnMenu";
import Link from 'next/link'
import redirectWithScroll from "../../utils/redirectWithScroll";
import { useRouter } from "next/router";
import { Input, List, ListItem, Spinner } from '@material-tailwind/react'


const NavBar = () => {

  const router = useRouter()

  const [searchInput, setSearchInput] = useState('')
  const [autocompleteResults, setAutocompleteResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const searchContainerRef = useRef(null)

  useEffect(() => {

    const handleClickOutside = (e) => {

      if(searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {

        setSearchInput('')

      }

    }

    document.addEventListener("click", handleClickOutside)

    return () => {

      document.removeEventListener("click", handleClickOutside)

    }

  }, [])

  const handleChange = async (event) => {

    const { value } = event.target;
    setSearchInput(value)

    try {

      setIsLoading(true)
      const response = await fetch(`https://api.zecatdifapro.com/generic_product/autocomplete?name=${value}`)
      const data = await response.json();
      setAutocompleteResults(data.generic_products)
      console.log(data.generic_products)

    } catch (error) {

      console.error('Error de autocompletado', error)

    } finally {

      setIsLoading(false)

    }

  }

  const handlePressKey = (event) => {

    if (event.key === 'Enter' && autocompleteResults > 0) {

      const firstResult = autocompleteResults[0]

      router.push(`/store/${firstResult.id}`)

    }

    console.log(event.key)

  }

  return (
    <nav className="w-full h-20 md:h-[10vh] bg-gradient-to-t from-[#30807a] via-teal-400 to-teal-200 flex items-center justify-between shadow-sm shadow-black">

      <Link href='/'>

        <Image src={twentyLogo} alt="Twenty Logo" className="h-20 w-44" />

      </Link>

      <div className="hidden md:flex items-center w-full justify-end px-4 lg:px-9 ">
        <ul className="flex gap-4 lg:gap-7 font-bold text-sm lg:text-lg cursor-pointer items-center">
          <li><Link href="/store">Productos</Link></li>
          <li><button onClick={redirectWithScroll(router, "/", "#catalogues")}>Catálogos</button></li>
          <li><button onClick={redirectWithScroll(router, "/", "#nosotros")}>Nosotros</button></li>
          <li><button onClick={redirectWithScroll(router, "/", "#contacto")}>Contacto</button></li>

          <Input type="text" placeholder="Buscar..." className="!border !border-blue-gray-50 bg-white text-blue-gray-500 shadow-lg shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 rounded-sm md:w-[15rem] lg:w-[20rem]"
                labelProps={{
                  className: "hidden",
                }}
                value={searchInput}
                onChange={handleChange}
                onKeyDown={handlePressKey}
          />

          {searchInput && (

            <div className="scrollbar absolute bg-white z-10 max-h-36 overflow-y-auto rounded-sm md:w-[15rem] lg:w-[20rem]  border border-blue-gray-200 shadow-md md:top-[3.2rem] md:right-4 lg:top-[3.3rem] lg:right-9" ref={searchContainerRef}>

              <List>
                {isLoading ? (

                  <div className="flex items-center justify-center">
                    <Spinner className="h-8 w-8" color="teal"/>
                  </div>

                ) : (
                  <div>
                    {autocompleteResults.length > 0 ? (

                        <div>
                          {autocompleteResults.map((result, i) => (

                            <Link key={i} href={`/store/${result.id}`}>

                              <ListItem className="cursor-pointer">{result.name}</ListItem>

                            </Link>

                          ))}
                        </div>

                      ) : (

                        <p>No hay resultados disponibles....</p>

                      )
                    }
                  </div>
                )}

              </List>

            </div>

          )}

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
