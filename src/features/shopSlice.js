import { createSlice } from "@reduxjs/toolkit"
import categoriesData from "../data/categories_data.json"
import booksData from "../data/books_data.json"


export const shopSlice = createSlice({
    name: "shop",
    initialState: {
        categorySelected: "",
        bookIdSelected: 0,
        categories: categoriesData,
        books: booksData,
        booksFilterByCategory: []

    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload
            state.booksFilterByCategory = state.books.filter(book => book.category === state.categorySelected)
        },

        setProductIdSelected: (state, action) => {
            state.bookIdSelected = action.payload
        }
    }


});


export const { setCategorySelected, setProductIdSelected } = shopSlice.actions

export default shopSlice.reducer
