import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { rootReducer } from "./movieStore/movieReducers";

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
