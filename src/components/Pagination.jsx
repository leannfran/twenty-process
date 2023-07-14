import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Pagination({
  active,
  setActive,
  next,
  prev,
  getItemProps,
  totalPages,
}) {
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Anterior
      </Button>
      <div className=" lg:hidden ">
      <IconButton {...getItemProps(active)}>{active}</IconButton>
      </div>
      <div className="hidden lg:flex items-center gap-2 ">
        {Array(totalPages).fill().map((_,index) => (
          <IconButton {...getItemProps(index+1)} key={index}>{index+1}</IconButton>
        ))}
       
      </div>
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={active === totalPages}
      >
        Siguiente
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
