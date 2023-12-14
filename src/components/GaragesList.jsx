import { Button, Spinner } from "@material-tailwind/react";
import { GaragesListItem } from "./GaragesListItem";
import {
  useAddGarageMutation,
  useGetGaragesQuery,
} from "../store/apis/garagesApi";
import { GarageSkeleton } from "./skeletons/GarageSkeleton";

export const GaragesList = () => {
  const {
    data: garages,
    isLoading,
    isFetching,
    isError,
  } = useGetGaragesQuery();

  const [addGarage, result] = useAddGarageMutation();

  const onAddGarage = () => {
    addGarage();
  };
  const content = () => {
    if (isError) {
      return <h1>Something went wrong</h1>;
    }
    if (isLoading || isFetching) {
      return Array(3)
        .fill(0)
        .map((_, i) => <GarageSkeleton key={i}></GarageSkeleton>);
    }
    return garages.map((garage) => {
      return <GaragesListItem key={garage.id} garage={garage} />;
    });
  };

  return (
    <div>
      <div className="flex justify-between m-[5px] w-full">
        <div className="text-lg font-bold m-[20px]">Garages</div>{" "}
        <Button color="green" size="md" onClick={onAddGarage}>
          {result.isLoading ? <Spinner></Spinner> : "Add a Garage"}
        </Button>
      </div>
      {content()}
    </div>
  );
};
