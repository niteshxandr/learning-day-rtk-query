import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { garagesApi } from "./apis/garagesApi";
import { carsApi } from "./apis/carsApi";

export const store = configureStore({
  reducer: {
    [garagesApi.reducerPath]: garagesApi.reducer,
    [carsApi.reducerPath]: carsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(garagesApi.middleware)
      .concat(carsApi.middleware);
  },
});

setupListeners(store.dispatch);
