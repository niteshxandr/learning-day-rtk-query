import { Button } from "@material-tailwind/react";
import { GaragesListItem } from "./GaragesListItem";

export const GaragesList = () => {
  const onAddGarage = () => {};
  const garages = [{ name: "A & B" }, { name: "C & D" }];
  const content = () => {
    return garages.map((garage) => {
      return <GaragesListItem key={garage.id} garage={garage} />;
    });
  };

  return (
    <div>
      <div className="flex justify-between m-[5px] w-full">
        <div className="text-lg font-bold m-[20px]">Garages</div>{" "}
        <Button color="green" size="md" onClick={onAddGarage}>
          Add a Garage
        </Button>
      </div>
      {content()}
    </div>
  );
};
