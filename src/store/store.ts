import {configureStore} from "@reduxjs/toolkit";
import factReducer from '../slices/factSlice'
import avatarReducer from "../slices/avatarSlice";
import filmsReducer from "../slices/filmsSlice";

export const store = configureStore({
  reducer: {
    factList: factReducer,
    avatarList: avatarReducer,
    findFilms: filmsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch