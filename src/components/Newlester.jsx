import React from 'react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Newlester = () => {
    const form = useRef();
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes enviar la dirección de correo electrónico a tu servidor o realizar cualquier otra acción.
      console.log(`Se ha suscrito con éxito con el correo electrónico: ${email}`);
    };
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6gn38gg', 'template_dd8liyj', form.current, '1lzeUDRjY7s7VJzeu')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
  
    return (
            <div className="w-full max-w-md mx-auto">
      <form className="  " ref={form} onSubmit={sendEmail} >
            <div className="flex items-center justify-center">
            <input type="email"   placeholder='tu correo electronico'          name="message"
 className='shadow appearance-none border-2 border-primary rounded-l-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
          
        
          <button
            className="bg-primary  text-white font-bold py-2 px-4 rounded-r-lg focus:outline-none focus:shadow-outline"
            type="submit"
            value="Send"
          >
            Suscribirse
          </button>
        </div>
      </form>
    </div>
    );
}

export default Newlester;
