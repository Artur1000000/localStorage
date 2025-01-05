import { configureStore } from "@reduxjs/toolkit";
import newsListReducer from "./slices/newsList";

export const store = configureStore({
  reducer: { newsList: newsListReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
