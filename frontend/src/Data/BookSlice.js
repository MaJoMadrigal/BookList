import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bookList: [],
  mode: false,
  modeContent: '',
}

const customerSlice = createSlice({
  // An unique name of a slice
  name: 'Book',

  // Initial state value of the reducer
  initialState,

  // Reducer methods
  reducers: {
    addBook: (state, action) => {
      state.bookList.push(action.payload.load)
      state.mode = true
      state.modeContent = 'New book added'
    },

    noValue: (state) => {
      state.mode = true
      state.modeContent = 'Please write your discovery'
    },

    noModeContent: (state) => {
      state.mode = false
    },

    deletee: (state, action) => {
      const newItem = state.bookList.filter(
        (point) => point.id !== action.payload.id
      )
      return {
        ...state,
        bookList: newItem,
      }
    },
  },
})

// Action creators for each reducer method
export const { addBook, noValue, noModeContent, deletee } =
  customerSlice.actions

export default customerSlice.reducer