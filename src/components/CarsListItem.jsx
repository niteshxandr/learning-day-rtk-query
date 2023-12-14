import React from "react";
import { SimpleCard } from "./generic/SimpleCard";

const CarsListItem = ({ car }) => {
  const handleRemove = () => {};
  return (
    <SimpleCard
      name={car.name}
      onDelete={handleRemove}
      isLoading={false}
    ></SimpleCard>
  );
};

export default CarsListItem;
