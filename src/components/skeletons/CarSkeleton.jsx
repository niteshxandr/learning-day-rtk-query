import { Card, CardBody } from "@material-tailwind/react";
import React from "react";

export const CarSkeleton = () => {
  return (
    <Card className="grid min-w-[14rem] h-[20rem] w-full max-w-[14rem] items-end justify-center overflow-hidden text-center">
      <CardBody>
        <div className="w-full h-full">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        </div>
      </CardBody>
    </Card>
  );
};
