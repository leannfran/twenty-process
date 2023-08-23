import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import {
  EnvelopeIcon,
  EnvelopeOpenIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
 
export default function ContactFloatButton() {
  return (
    <div className="relative w-full h-80 ">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full bg-[#235F5B]">
              <PlusIcon className="hidden h-5 w-5 group-hover:block rotate-45" />
              <EnvelopeIcon className="block h-5 w-5 group-hover:hidden" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction>
            <Link href="https://api.whatsapp.com/send?phone=5491178311503&text=¡Hola!, Me interesa 
                            conocer más sobre los servicios que ofrece Twenty, ¿Podrían proporcionarme más información y precios? ¡Gracias! 😀" target="_blank">
              <BsWhatsapp className="h-5 w-5 text-[#235F5B]" />
            </Link>
            </SpeedDialAction>
            <SpeedDialAction>
            <Link href="mailto: info@twenty.com.ar">
              <EnvelopeIcon className="h-5 w-5 text-[#235F5B]" />
            </Link>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}