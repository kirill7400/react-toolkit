import {createSlice} from "@reduxjs/toolkit";

interface State {
  value: string,
  list: Array<string>
}

const initialState:State = {
  value: '',
  list: []
}

export const avatarSlice = createSlice({
  name: 'avatarList',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload
    },

    addImg: (state) => {
      return {...state, list: [...state.list, state.value]}
    }
  }
})

export const { addImg, changeValue } = avatarSlice.actions

export default avatarSlice.reducer