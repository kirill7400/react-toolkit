import {createSlice} from "@reduxjs/toolkit";

interface State {
  value: string,
  list: Array<string>
  showList: Array<string>
}

const initialState:State = {
  value: '',
  list: [
    'прообразом Чубакки стал пёс режиссёра',
    'актёрам разрешили подобрать любимый цвет для своих световых мечей',
    'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
    'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
    'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок'
  ],
  showList: []
}

export const factSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload
      state.showList = state.list.slice(0, Number(state.value))
    }
  }
})

export const { changeValue } = factSlice.actions

export default factSlice.reducer