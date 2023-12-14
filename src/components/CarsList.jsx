import { Button } from "@material-tailwind/react";
import CarListItem from "./CarsListItem";
import { CarSkeleton } from "./skeletons/CarSkeleton";
import { useGetCarsQuery } from "../store/apis/carsApi";

export const CarsList = ({ garage }) => {
  const {
    data: cars,
    isLoading,
    isFetching,
    isError,
  } = useGetCarsQuery(garage);

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
