import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';

const ContactForm = () => {
    return (
        <>

            <div className='flex flex-col md:flex-row justify-center items-center gap-12'>

                <div className='bg-primary p-44 w-2/4 flex flex-col justify-center items-center relative h-full'>

                    <div className='absolute top-0 left-0 w-full h-full backdrop-blur bg-[url(../../public/assets/message-illustration.png)] bg-center bg-contain bg-no-repeat' style={{ opacity: 0.2 }}></div>
                    <div className='flex justify-start items-start flex-col relative'>

                        <h1 className='text-white font-extrabold text-5xl max-w-sm'>Contactá con nosotros</h1>

                        <p className='text-white mt-5'>
                            {`Ponete en contacto con nosotros a través de 
                              nuestro fomulario para recibir asistencia
                              personalizada. Estamos disponibles para
                              responder tus consultas y brindarte el mejor
                              servicio posible.`}
                        </p>

                    </div>

                </div>

                <div className='flex flex-col items-center md:items-start'>

                    <div>

                        <h2 className='text-black font-bold'>Envianos tu mensaje</h2>
                        <hr className='w-44 border border-primary'></hr>

                    </div>

                    <div>

                        <h3 className='mt-5 text-black'>A través del whatsapp o email:</h3>

                    </div>

                    <div className='flex gap-5 mt-5'>

                        <div className='rounded-full bg-primary p-2'>

                            <FaWhatsapp size={32} color='white' />

                        </div>

                        <div className='rounded-full bg-primary p-2'>

                            <AiOutlineMail size={32} color='white' />

                        </div>

                    </div>



                    <form className='flex mt-5 flex-col gap-8 items-center md:items-start'>

                        <h3 className='text-black'>A través de nuestro formulario:</h3>

                        <div className='flex flex-col gap-5'>

                            <div className='flex flex-col'>
                                <label className='text-black font-bold mb-2'>
                                    Nombre
                                </label>

                                <input placeholder='Escribe tu nombre...' className='border-none bg-[#D9D9D9] p-2 placeholder-secondary rounded-md caret-black text-black md:w-72' type='name'></input>
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-black font-bold mb-2'>
                                    Email <span className='text-red-700'>*</span>
                                </label>

                                <input placeholder='Escribe tu email...' type='email' autoComplete='username' className='border-none bg-[#D9D9D9] p-2 placeholder-secondary rounded-md caret-black text-black md:w-72'></input>
                            </div>


                            <div className='flex flex-col'>

                                <label className='text-black font-bold mb-2'>
                                    Mensaje <span className='text-red-700'>*</span>
                                </label>
                                <textarea className='text-black resize-none borde placeholder-secondary bg-[#D9D9D9] p-2 rounded-md h-28 md:w-72' placeholder='Escribí tu mensaje...'></textarea>

                            </div>

                            <button type='submit' className='text-white border-none p-2 bg-primary flex items-center justify-center gap-2 font-bold md:w-full sm:w-full'>
                                <FiSend color='white' size='18' />
                                Enviar
                            </button>
                            
                        </div>

                    </form>

                </div>



            </div>

        </>
    )
}

export default ContactForm