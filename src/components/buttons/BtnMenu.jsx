import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";
import { IconMenuSvg } from "../Svgs";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import redirectWithScroll from "@/utils/redirectWithScroll";

export default function BtnMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  return (
    <Menu open={open}>
      <Button
        type="button"
        className="bg-transparent shadow-transparent hover:shadow-transparent  "
        onClick={() => setOpen(!open)}
      >
        <IconMenuSvg />
      </Button>

      <MenuList className="bg-gradient-to-b from-[#328782f4] via-teal-400 to-teal-200 text-white border-none w-full mt-[70px] rounded-none">
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
          <Input type="text" placeholder="Buscar..." className="!border !border-blue-gray-50 bg-white text-blue-gray-500 shadow-lg shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 w-56"
            labelProps={{
              className: "hidden",
            }}
            />
        </div>
      </MenuList>
    </Menu>
  );
}
