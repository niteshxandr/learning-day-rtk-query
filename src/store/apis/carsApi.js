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
      providesTags: (result, error, garage) => {
        return [{ type: "GarageCars", id: garage.id }];
      },
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
      invalidatesTags: (result, error, garage) => {
        return [{ type: "GarageCars", id: garage.id }];
      },
      providesTags: (result, error, garage) => {
        return [{ type: "GarageCars", id: garage.id }];
      },
    }),
    removeCar: builder.mutation({
      query: (car) => ({
        url: `/cars/${car.id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, car) => {
        return [{ type: "GarageCars", id: car.garageId }];
      },
    }),
  }),
});

export const { useGetCarsQuery, useAddCarMutation, useRemoveCarMutation } =
  carsApi;
