import { TrashIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  CardHeader,
  Spinner,
  Typography,
} from "@material-tailwind/react";

export const SimpleCard = ({ name, onDelete, isLoading }) => {
  return (
    <Card
      shadow={false}
      className="relative min-w-[9rem] h-[12rem] w-full max-w-[9rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className={`absolute inset-0 m-0 h-full w-full rounded-none bg-[url('/image.jpg')] bg-cover bg-center`}
      >
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative grid w-full h-full px-6 place-items-center">
        <div className="absolute top-[5px] right-[5px] z-500">
          {isLoading ? (
            <Spinner />
          ) : (
            <TrashIcon width={30} color="red" onClick={onDelete}></TrashIcon>
          )}
        </div>
        <Typography
          variant="h5"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {name}
        </Typography>
      </CardBody>
    </Card>
  );
};
