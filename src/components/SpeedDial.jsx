import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

export default function ContactFloatButton() {
  // Función para realizar el seguimiento de la conversión
  const gtag_report_conversion = (url) => {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    
    // Llamada a la función de seguimiento de conversión
    gtag('event', 'conversion', {
      'send_to': 'AW-11317549295/wYiHCNXwpeMYEO-x0JQq',
      'event_callback': callback
    });
    
    return false;
  };

  return (
    <div className="relative w-full h-80">
      <div className="absolute bg-green-500 p-4 rounded-full bottom-0 right-0">
        {/* Agrega el fragmento a continuación en el evento onClick del botón de WhatsApp */}
        <a
          href="https://api.whatsapp.com/send?phone=5491178311503&text=¡Hola!, Me interesa conocer más sobre los servicios que ofrece Twenty, ¿Podrían proporcionarme más información y precios? ¡Gracias! 😀"
          target="_blank"
          onClick={() => gtag_report_conversion()}
        >
          <BsWhatsapp className="h-7 w-7 text-white" />
        </a>
      </div>
    </div>
  );
}


