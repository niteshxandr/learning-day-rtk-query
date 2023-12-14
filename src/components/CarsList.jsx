import { Button } from "@material-tailwind/react";
import CarListItem from "./CarsListItem";
import { CarSkeleton } from "./skeletons/CarSkeleton";

export const CarsList = ({ advertiser }) => {
  const [isError, isLoading, isFetching, cars] = [
    false,
    false,
    false,
    [
      { id: 1, name: "GranTurismo" },
      { id: 2, name: "Levante" },
    ],
  ];

  const onAddCar = () => {};
  const content = () => {
    if (isError) {
      return <h1>Something went wrong...</h1>;
    }
    if (isLoading || isFetching) {
      return Array(3)
        .fill(0)
        .map((_, i) => <CarSkeleton key={i}></CarSkeleton>);
    }
    return cars.map((car) => <CarListItem key={car.id} car={car} />);
  };
  return (
    <div className="flex flex-col items-start">
      <Button color="indigo" onClick={onAddCar}>
        Add a car
      </Button>
      <div className="flex flex-row gap-[10px] my-[10px] flex-wrap">
        {content()}
      </div>
    </div>
  );
};
