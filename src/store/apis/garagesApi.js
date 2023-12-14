import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchFn } from "../utils/index";

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
  }),
});

export const { useGetGaragesQuery } = garagesApi;
