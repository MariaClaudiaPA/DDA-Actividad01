// src/redux/bookSlice.js
import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
    name: 'books',
    initialState: [],
    reducers: {
        addBook(state, action) {
            state.push(action.payload);
        },
        updateBook(state, action) {
            const index = state.findIndex((book) => book.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteBook(state, action) {
            return state.filter((book) => book.id !== action.payload);
        },
    },
});

export const { addBook, updateBook, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;
