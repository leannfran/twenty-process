import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";
import {IconMenuSvg} from "../Svgs";
import React from "react";
import { Link as Scroll} from 'react-scroll'
import Link from 'next/link'

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

      <MenuList className="bg-gradient-to-b from-[#328782f4] via-teal-400 to-teal-200 text-white border-none w-full mt-[80px] rounded-none">
        <div className="flex flex-col gap-4">

        <Link href='store/' className='cursor-pointer'> 
          <MenuItem>Productos</MenuItem>
        </Link>
        <Scroll to="catalogos" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer">
          <MenuItem>Catálogos</MenuItem>
        </Scroll>
        <Scroll to="nosotros" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer">
          <MenuItem>Nosotros</MenuItem>
        </Scroll>
        <Scroll to="contacto" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>
          <MenuItem>Contacto</MenuItem>
        </Scroll>

        </div>
      </MenuList>
    </Menu>
  );
}
