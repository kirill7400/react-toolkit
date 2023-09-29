import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

interface State {
  value: string,
  list: Array<string>,
  error: string,
  loading: boolean,
  favorites: Array<string>
}

const initialState:State = {
  value: '',
  list: [],
  error: '',
  loading: false,
  favorites: []
}

export const fetchFilms = createAsyncThunk('films/fetchProducts', async (param: string) => {
  return await axios.get('https://www.omdbapi.com', {
    params: {
      apikey: '64405bd2',
      s: param
    }
  })
    .then((res) => res.data)
    .catch(e => console.log(e))
})

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload
    },
    addFavorites: (state, action) => {
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state) => {
      state.list = [];
      state.loading = true;
    });
    builder.addCase(fetchFilms.fulfilled, (state, { payload }) => {
      if (payload.Response === 'False') {
        state.error = 'Фильмы не найдены!'
        state.loading = false;
      }
      if (payload.Response === 'True') {
        state.error = ''
        state.list = payload?.Search;
        state.loading = false;
      }
    });
    builder.addCase(fetchFilms.rejected,(state) => {
      state.loading = false;
      state.error = 'Ошибка!'
    });
  }
})

export const { changeValue, addFavorites } = filmsSlice.actions

export default filmsSlice.reducer