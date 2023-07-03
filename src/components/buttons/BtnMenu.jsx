import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";
import IconMenuSvg from "../Svgs";
import React from "react";

export default function BtnMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <Menu open={open}>
      <Button
        type="button"
        className="bg-transparent shadow-transparent hover:shadow-transparent  "
        onClick={() => setOpen(!open)}
      >
        <IconMenuSvg />
      </Button>

      <MenuList className="bg-gradient-to-b from-[#328782f4] via-teal-400 to-teal-200 text-white border-none w-full mt-[95px]">
        <input
          className="w-full h-12 rounded-xl p-4 text-black"
          placeholder="Buscar..."
        />
        <MenuItem>Categorias</MenuItem>
        <MenuItem>Catálogos</MenuItem>
        <MenuItem>Contacto</MenuItem>
      </MenuList>
    </Menu>
  );
}
