import { Button, Spinner } from "@material-tailwind/react";
import React from "react";
import { CarsList } from "./CarsList";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useRemoveGarageMutation } from "../store/apis/garagesApi";

export const GaragesListItem = ({ garage }) => {
  const [removeGarage, result] = useRemoveGarageMutation();

  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleRemoveGarage = (e) => {
    removeGarage(garage);
    e.stopPropagation();
  };
  return (
    <div className="m-[10px] flex flex-col justify-between w-full p-4 border border-gray-500 rounded shadow-md cursor-pointer">
      <div
        className="flex flex-row justify-between w-full h-full"
        onClick={handleOpen}
      >
        <div className="text-xl font-bold text-gray-800">{garage.name}</div>
        <Button color="red" onClick={handleRemoveGarage}>
          {result.isLoading ? (
            <Spinner></Spinner>
          ) : (
            <TrashIcon width={30} color="white"></TrashIcon>
          )}
        </Button>
      </div>
      <div>{isOpen && <CarsList garage={garage} />}</div>
    </div>
  );
};
