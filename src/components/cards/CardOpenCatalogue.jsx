import { Button, Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import catalogueImg from "../../../public/assets/catalogue-img.png";
import Image from "next/image";
import { BsDownload, BsX } from "react-icons/bs";

export default function CardOpenCatalogue({closeCatalogue}) {
  return (
    <div className="w-full h-[450px] sm:w-[500px]  sm:h-[450px]  sm:rounded-xl shadow-md shadow-gray-700 flex flex-col">
      <Carousel
        className="sm:rounded-t-xl h-3/4"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 -translate-y-2/4 left-4"
          >
            <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 -translate-y-2/4 !right-4"
          >
            <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
          </IconButton>
        )}
      >
        <Image
          src={catalogueImg}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <Image
          src={catalogueImg}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <Image
          src={catalogueImg}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
      <div className="bg-white w-full h-1/4 overflow-hidden rounded-b-xl flex">
        <Button className="flex items-center gap-3 bg-white text-[#235F5B] font-extrabold h-12 w-40 shadow-md shadow-[#235F5B] m-auto" >
          <BsDownload size={34} /> Descargar
        </Button>
        <Button className="flex items-center gap-3 bg-white text-[#235F5B] font-extrabold h-12 w-40 shadow-md shadow-[#235F5B] m-auto" onClick={()=>closeCatalogue(false)}>
          <BsX size={34} /> Cerrar
        </Button>
      </div>
    </div>
  );
}
