import Image from "next/image";
import NosotrosImg from "../../public/assets/nosotrosIMG.png";
const Nosotros = () => {
  return (
    <div className="flex  bg-gradient-to-t pb-20 from-[#B9D8D6] text-black mt-0">
      <div className="w-1/2 flex justify-center">
        <Image
          className=" hidden md:flex rounded-full overflow-hidden w-96 h-96 object-cover border-8 border-primary"
          src={NosotrosImg}
          alt={"IMAGEN DE UN EMPRESARIO"}
          width={1000}
          height={1000}
        />
      </div>
      <div className=" md:w-1/2 mt-10" id="nosotros">
        <h4 className="text-3xl font-semibold tracking-widest pb-2 mb-4 border-b inline-block border-primary ">
          NOSOTROS
        </h4>

        <p className="md:pr-28 tracking-wide pr-3 leading-8 ">
          Somos <b>especialistas</b> en productos de merchandising. Ofrecemos atención
          exclusiva y personalizada a la medida de tu marca, para que te
          identifiques con nuestros productos y el mensaje que queres brindar a
          tus clientes. Generamos la oportunidad de que tu marca acompañe a tu
          cliente en su día a día. Que esté presente en el mate de todas las
          mañanas, en la botella con agua que lleva al gimnasio y en la mochila
          que lleva al trabajo. De esta forma, logramos que te recuerden a
          través de un presente, generando así un vínculo positivo y
          fidelizándolo de la mejor manera.{" "}
        </p>
        <Image
          className="  md:hidden rounded-full my-5 overflow-hidden w-80 h-80 object-cover border-4 border-primary"
          src={NosotrosImg}
          alt={"IMAGEN DE UN EMPRESARIO"}
          width={500}
          height={500}
          />
      </div>
    </div>
  );
};

export default Nosotros;
