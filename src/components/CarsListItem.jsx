import React from "react";
import { SimpleCard } from "./generic/SimpleCard";
import { useRemoveCarMutation } from "../store/apis/carsApi";

const CarsListItem = ({ car }) => {
  const [removeCar, result] = useRemoveCarMutation();

  const handleRemove = () => {
    removeCar(car);
  };
  return (
    <SimpleCard
      name={car.name}
      onDelete={handleRemove}
      isLoading={result.isLoading}
    ></SimpleCard>
  );
};

export default CarsListItem;
