import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

export default function ContactFloatButton() {
  return (
    <div className="relative w-full h-80">
      <div className="absolute bg-green-500 p-4 rounded-full bottom-0 right-0">
        <Link
          href="https://api.whatsapp.com/send?phone=5491178311503&text=¡Hola!, Me interesa 
                            conocer más sobre los servicios que ofrece Twenty, ¿Podrían proporcionarme más información y precios? ¡Gracias! 😀"
          target="_blank"
        >
          <BsWhatsapp className="h-7 w-7 text-white" />
        </Link>
      </div>
    </div>
  );
}
