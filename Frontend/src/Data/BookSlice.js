import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (dispatch, getState) => {
    return await fetch('https://eon0nix5j9.execute-api.us-east-1.amazonaws.com/prod/get-books').then(
     (res) => res.json()
    )
  }
)

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (payload) => {
    return await fetch(`https://eon0nix5j9.execute-api.us-east-1.amazonaws.com/prod/delete-book?name=${payload.name}&id=${payload.id}`,
    {
      method:"DELETE"
    }).then(
     (res) => res.json()
    )
  }
)

export const putBook = createAsyncThunk(
  "books/putBook",
  async (payload) => {
    const { id, name, author, review } = payload.load.origin;
    return await fetch('https://eon0nix5j9.execute-api.us-east-1.amazonaws.com/prod/put-book',
    {
      method:"PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, name, author, review })
    }).then(
     (res) => res.json()
    )
  }
)

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
  },

  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
      state.status = "success";
      state.bookList = action.payload.books;
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.status = "success";
      const newItem = state.bookList.filter(
        (point) => point.id !== action.payload.origin.id
      )
      return {
        ...state,
        bookList: newItem,
      };
    },
    [putBook.fulfilled]: (state, action) => {
      state.status = "success";
      state.bookList = action.payload.books;
    }
  }
})

// Action creators for each reducer method
export const { addBook, noValue, noModeContent } =
  customerSlice.actions

export default customerSlice.reducer