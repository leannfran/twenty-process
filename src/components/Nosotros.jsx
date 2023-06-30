import Image from "next/image";
import NosotrosImg from "../..//public/assets/NosotrosImg.jpeg";
const Nosotros = () => {
  return (
    <div className="flex  bg-gradient-to-t pb-20 from-[#B9D8D6] text-black mt-10 ">
      <div className="w-1/2 flex justify-center">
        <Image
          className=" rounded-full overflow-hidden w-96 h-96 object-cover border-8 border-primary"
          src={NosotrosImg}
          alt={"IMAGEN DE UN EMPRESARIO"}
          width={500}
          height={500}
        />
      </div>
      <div className="w-1/2 mt-10">
        <h4 className="text-3xl font-semibold tracking-widest pb-2 mb-4 border-b inline-block border-primary ">
          NOSOTROS
        </h4>
        <p className="pr-28 tracking-wide pl-3 leading-8 ">
          Lorem ipsum dolor sit amet consectetur adipiscing elit turpis
          venenatis, netus habitasse penatibus egestas eget luctus mus lacinia
          aliquet habitant, tincidunt tellus libero risus donec varius massa
          mattis. Hac libero lobortis imperdiet rutrum placerat litora et,
          posuere sed conubia lacinia sociosqu maecenas felis, torquent feugiat
          neque mauris vestibulum primis.{" "}
        </p>
      </div>
    </div>
  );
};

export default Nosotros;
