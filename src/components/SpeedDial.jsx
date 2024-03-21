import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

export default function ContactFloatButton() {
  // Función para realizar el seguimiento de la conversión de WhatsApp
  const gtag_report_conversion_whatsapp = () => {
    // Agrega el fragmento de seguimiento de conversión de WhatsApp aquí
    gtag('event', 'conversion', {
      'send_to': 'AW-11317549295/XnLICNjwpeMYEO-x0JQq'
    });
  };

  return (
    <div className="relative w-full h-80">
  <div className="absolute bg-green-500 p-4 rounded-full bottom-0 right-0">
    {/* Agrega el fragmento de seguimiento de conversión al evento onClick del botón de WhatsApp */}
    <button
      onClick={() => {
        gtag_report_conversion_whatsapp();
        window.open("https://api.whatsapp.com/send?phone=5491178311503&text=¡Hola!, Me interesa conocer más sobre los servicios que ofrece Twenty, ¿Podrían proporcionarme más información y precios? ¡Gracias! 😀", "_blank");
      }}
      className="bg-green-500 p-2 rounded-full"
      aria-label="Contactar vía WhatsApp"
    >
      <BsWhatsapp className="h-7 w-7 text-white" />
    </button>
  </div>
</div>
  );
}
