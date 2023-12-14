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
      providesTags: ["Garages"],
    }),
    addGarage: builder.mutation({
      query: () => ({
        url: "/garages",
        method: "POST",
        body: {
          name: faker.color.human(),
        },
      }),
      invalidatesTags: ["Garages"],
    }),
    removeGarage: builder.mutation({
      query: (garage) => ({
        url: `/garages/${garage.id}`,
        method: "DELETE",
      }),
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          garagesApi.util.updateQueryData("getGarages", undefined, (draft) => {
            return draft.filter(({ id: garageId }) => garageId != id);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      // invalidatesTags: ["Garages"],
    }),
  }),
});

export const {
  useGetGaragesQuery,
  useAddGarageMutation,
  useRemoveGarageMutation,
} = garagesApi;
