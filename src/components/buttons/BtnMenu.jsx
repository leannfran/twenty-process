import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";
import IconMenuSvg from "../Svgs";
 
export default function BtnMenu() {
  return (
    <div className="md:hidden">

    <Menu
      dismiss={{
        itemPress: false,
      }}
      >
      <MenuHandler>
        <Button className="bg-transparent shadow-transparent hover:shadow-transparent"><IconMenuSvg/></Button>
      </MenuHandler>
      <MenuList>
        <Input
          label="Buscar..."
          containerProps={{
            className: "mb-4",
          }}
        />
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
          </div>
  );
}