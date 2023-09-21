import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { customConfirm, showDefaultAlert } from "./sweetAlert";


const Newlester = () => {
  const form = useRef();
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Envía el formulario utilizando emailjs
    emailjs.sendForm('service_6gn38gg', 'template_dd8liyj', form.current, '1lzeUDRjY7s7VJzeu')
      .then((result) => {
        console.log(result.text);
        // Agrega el fragmento de seguimiento de conversión aquí
        gtag_report_conversion();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  // Función para realizar el seguimiento de la conversión
  const gtag_report_conversion = () => {
    // Agrega el fragmento de seguimiento de conversión aquí
    gtag('event', 'conversion', {
      'send_to': 'AW-11317549295/wYiHCNXwpeMYEO-x0JQq'
    });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form className=" " ref={form} onSubmit={sendEmail}>
        <div className="flex items-center justify-center mx-2">
          <input
            type="email"
            placeholder='tu correo electronico'
            name="message"
            className='shadow appearance-none border-2 border-primary rounded-l-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            onChange={handleInputChange}
          />
          <button
            className="bg-primary text-white font-bold py-2 px-4 rounded-r-lg focus:outline-none focus:shadow-outline"
            type="submit"
            value="Send"
            onClick={()=>     showDefaultAlert('Gracias por Suscribirte a Nuestro Newsletter', 'success' )}          >
            Suscribirse
          </button>
        </div>
      </form>
    </div>
  );
}

export default Newlester;