import { configureStore } from '@reduxjs/toolkit'
import BookReducer from './BookSlice'

export const store = configureStore({
  reducer: {
    bookStore: BookReducer,
  },
})