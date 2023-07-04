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
 
export default function ContactFloatButton() {
  return (
    <div className="relative w-full h-80">
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
              <BsWhatsapp className="h-5 w-5 text-[#235F5B]" />
            </SpeedDialAction>
            <SpeedDialAction>
              <EnvelopeIcon className="h-5 w-5 text-[#235F5B]" />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}