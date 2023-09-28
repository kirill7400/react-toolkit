import {configureStore} from "@reduxjs/toolkit";
import factReducer from '../slices/factSlice.ts'
import avatarReducer from "../slices/avatarSlice";

export const store = configureStore({
  reducer: {
    factList: factReducer,
    avatarList: avatarReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch