import { configureStore } from "@reduxjs/toolkit"
import shopReducer from "../features/shopSlice.js"


export default configureStore({
    reducer: { shopReducer }
})