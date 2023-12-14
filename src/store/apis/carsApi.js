import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchFn } from "../utils";
import { faker } from "@faker-js/faker";

export const carsApi = createApi({
  reducerPath: "cars",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/", fetchFn }),
  endpoints: (builder) => ({
    getCars: builder.query({
      query: (garage) => ({
        url: "/cars",
        params: {
          garageId: garage.id,
        },
      }),
    }),
    addCar: builder.mutation({
      query: (garage) => ({
        url: "/cars",
        method: "POST",
        body: {
          name: faker.vehicle.model(),
          garageId: garage.id,
        },
      }),
    }),
    removeCar: builder.mutation({
      query: (car) => ({
        url: `/cars/${car.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetCarsQuery, useAddCarMutation, useRemoveCarMutation } =
  carsApi;
