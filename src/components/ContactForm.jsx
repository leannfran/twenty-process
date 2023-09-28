import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsSendFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { Toaster, toast } from "sonner";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import Link from "next/link";

const schema = yup.object({
  name: yup.string().required("El campo nombre es requerido"),
  email: yup
    .string()
    .required("El campo email es requerido")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
      "Ingrese un correo electrónico válido"
    ),
  message: yup.string().required("El campo mensaje es requerido"),
});

const ContactForm = () => {
  const [openPopoverName, setOpenPopoverName] = useState(false);
  const [openPopoverEmail, setOpenPopoverEmail] = useState(false);
  const [openPopoverMessage, setOpenPopoverMessage] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = (formData) => {
    setIsSending(true);
    emailjs
      .send(
        "service_jhe7wr6",
        "template_twenty",
        formData,
        "JKaEpvNGBleWS_JA8"
      )
      .then(
        (result) => {
          toast.success("Mensaje enviado con éxito!");
          setIsSending(false);
        },
        (error) => {
          toast.error("Error al enviar el formulario");
          setIsSending(false);
        }
      );

    reset();
  };

  const triggers = {
    name: {
      onMouseEnter: () => setOpenPopoverName(true),
      onMouseLeave: () => setOpenPopoverName(false),
    },

    email: {
      onMouseEnter: () => setOpenPopoverEmail(true),
      onMouseLeave: () => setOpenPopoverEmail(false),
    },

    message: {
      onMouseEnter: () => setOpenPopoverMessage(true),
      onMouseLeave: () => setOpenPopoverMessage(false),
    },
  };

  const gtag_report_form_submission = () => {
    gtag('event', 'conversion', {
      'send_to': 'AW-11317549295/-Zc1CLPxxOYYEO-x0JQq'
    });
    return false;
  };

  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-center items-center gap-12 mt-24 md:mt-0 mb-10"
        id="contacto"
      >
        <div className="bg-primary p-44 w-2/4 h-96 flex flex-col justify-center items-center relative md:mt-5 md:w-2/4 md:h-full">
          <div
            className="absolute top-0 left-0 w-full h-full backdrop-blur bg-[url(../../public/assets/message-illustration.png)] bg-center bg-contain bg-no-repeat"
            style={{ opacity: 0.2 }}
          ></div>
          <div className="flex justify-start items-start flex-col relative">
            <h1 className="text-white font-extrabold text-5xl max-w-sm">
              Contactá con nosotros
            </h1>

            <p className="text-white mt-5">
              {`Ponete en contacto con nosotros a través de 
                              nuestro fomulario para recibir asistencia
                              personalizada. Estamos disponibles para
                              responder tus consultas y brindarte el mejor
                              servicio posible.`}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <div>
            <h2 className="text-black font-bold">Envianos tu mensaje</h2>
            <hr className="w-44 border border-primary"></hr>
          </div>

          <div>
            <h3 className="mt-5 text-black">A través del whatsapp o email:</h3>
          </div>

          <div className="flex gap-5 mt-5">
            <div className="rounded-full bg-primary p-2">
              <Link
                href="https://api.whatsapp.com/send?phone=5491178311503&text=¡Hola!, Me interesa 
                            conocer más sobre los servicios que ofrece Twenty, ¿Podrían proporcionarme más información y precios? ¡Gracias! 😀"
                target="_full"
              >
                <FaWhatsapp size={32} color="white" />
              </Link>
            </div>

            <div className="rounded-full bg-primary p-2">
              <Link href="mailto: info@twenty.com.ar?subject=Consulta de servicios">
                <AiOutlineMail size={32} color="white" />
              </Link>
            </div>
          </div>

          <form
            className="flex mt-5 flex-col gap-8 items-center md:items-start"
            onSubmit={handleSubmit(sendEmail)}
          >
            <h3 className="text-black">A través de nuestro formulario:</h3>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label className="text-black font-bold mb-2">
                  Nombre Completo
                  <Popover
                    placement="right-end"
                    open={openPopoverName}
                    handler={setOpenPopoverName}
                  >
                    <PopoverHandler {...triggers.name}>
                      <span className="text-red-700"> *</span>
                    </PopoverHandler>
                    <PopoverContent {...triggers.name}>
                      <span>Este campo es obligatorio.</span>
                    </PopoverContent>
                  </Popover>
                </label>

                <input
                  placeholder="Escribe tu nombre..."
                  className="border-none bg-[#D9D9D9] p-2 placeholder-secondary rounded-md caret-black text-black md:w-72 focus:border-primary focus:outline-none focus:ring-primary focus:ring-2 transition duration-300"
                  type="name"
                  name="name"
                  {...register("name")}
                />

                {errors.name && (
                  <p role="alert" className="text-red-500 text-center mt-1">
                    * {errors.name.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label className="text-black font-bold mb-2">
                  Email
                  <Popover
                    placement="right-end"
                    open={openPopoverEmail}
                    handler={setOpenPopoverEmail}
                  >
                    <PopoverHandler {...triggers.email}>
                      <span className="text-red-700"> *</span>
                    </PopoverHandler>
                    <PopoverContent {...triggers.email}>
                      <span>Este campo es obligatorio.</span>
                    </PopoverContent>
                  </Popover>
                </label>

                <input
                  placeholder="Escribe tu email..."
                  name="email"
                  type="email"
                  autoComplete="username"
                  className="border-none bg-[#D9D9D9] p-2 placeholder-secondary rounded-md caret-black text-black md:w-72 focus:border-primary focus:outline-none focus:ring-primary focus:ring-2 transition duration-300"
                  {...register("email")}
                />
                {errors.email && (
                  <p role="alert" className="text-red-500 mt-1 text-center">
                    * {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label className="text-black font-bold mb-2">
                  Mensaje
                  <Popover
                    placement="right-end"
                    open={openPopoverMessage}
                    handler={setOpenPopoverMessage}
                  >
                    <PopoverHandler {...triggers.message}>
                      <span className="text-red-700"> *</span>
                    </PopoverHandler>
                    <PopoverContent {...triggers.message}>
                      <span>Este campo es obligatorio.</span>
                    </PopoverContent>
                  </Popover>
                </label>

                <textarea
                  className="text-black resize-none borde placeholder-secondary bg-[#D9D9D9] p-2 rounded-md h-28 md:w-72 focus:border-primary focus:outline-none focus:ring-primary focus:ring-2 transition duration-300"
                  placeholder="Escribí tu mensaje..."
                  name="message"
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <p role="alert" className="text-red-500 mt-1 text-center">
                    * {errors.message.message}
                  </p>
                )}
              </div>

              <Toaster theme="system" position="top-right" richColors />
              <button
                type="submit"
                value="Enviar"
                className="text-white border-none p-2 bg-primary flex items-center justify-center gap-2 font-bold md:w-full sm:w-full"
                onClick={() => gtag_report_form_submission()}

              >
                {isSending ? (
                  <div className="flex items-center gap-2">
                    <span>
                      <BsSendFill color="white" size="18" fill="white" />
                    </span>
                    <span>Enviando...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <FiSend color="white" size="18" />
                    <span>Enviar</span>
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
