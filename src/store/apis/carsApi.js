import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchFn } from "../utils";

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
  }),
});

export const { useGetCarsQuery } = carsApi;
