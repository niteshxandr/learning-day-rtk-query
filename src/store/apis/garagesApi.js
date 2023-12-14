import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchFn } from "../utils/index";
import { faker } from "@faker-js/faker";

export const garagesApi = createApi({
  reducerPath: "garages",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    fetchFn,
  }),
  endpoints: (builder) => ({
    getGarages: builder.query({
      query: () => "/garages",
    }),
    addGarage: builder.mutation({
      query: () => ({
        url: "/garages",
        method: "POST",
        body: {
          name: faker.color.human(),
        },
      }),
    }),
    removeGarage: builder.mutation({
      query: (garage) => ({
        url: `/garages/${garage.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetGaragesQuery,
  useAddGarageMutation,
  useRemoveGarageMutation,
} = garagesApi;
