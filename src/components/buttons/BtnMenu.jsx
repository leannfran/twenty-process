import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Input,
  List,
  ListItem,
  Spinner,
} from "@material-tailwind/react";
import { IconMenuSvg } from "../Svgs";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import redirectWithScroll from "@/utils/redirectWithScroll";

export default function BtnMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const [searchInput, setSearchInput] = useState('')
  const [autocompleteResults, setAutocompleteResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const searchContainerRef = useRef(null)

  useEffect(() => {

    const handleClickOutside = (e) => {

      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {

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

  return (
    <Menu open={open}>
      <Button
        type="button"
        className="bg-transparent shadow-transparent hover:shadow-transparent  "
        onClick={() => setOpen(!open)}
      >
        <IconMenuSvg />
      </Button>

      <MenuList className="bg-gradient-to-b from-[#328782f4] via-teal-400 to-teal-200 text-white border-none w-full mt-[70px] rounded-none md:hidden">
        <div className="flex flex-col gap-4">
          <Link href="store/" className="cursor-pointer">
            <MenuItem>Productos</MenuItem>
          </Link>
          <button onClick={redirectWithScroll(router, "/", "#catalogues")}>
            <MenuItem>Catálogos</MenuItem>
          </button>
          <button onClick={redirectWithScroll(router, "/", "#nosotros")}>
            <MenuItem>Nosotros</MenuItem>
          </button>
          <button onClick={redirectWithScroll(router, "/", "#contacto")}>
            <MenuItem>Contacto</MenuItem>
          </button>
          </div>
          <Input type="text" placeholder="Buscar..." className="!border !border-blue-gray-50 bg-white text-blue-gray-500 shadow-lg shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200"
          labelProps={{
            className: "hidden",
          }}
          value={searchInput}
          onChange={handleChange}
        />
        {searchInput && (
          <div className="scrollbar bg-white z-10 max-h-36 overflow-y-auto rounded-sm border border-blue-gray-200 shadow-md" ref={searchContainerRef}>

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
      </MenuList>
    </Menu>
  );
}
