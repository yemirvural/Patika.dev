import { configureStore } from "@reduxjs/toolkit";
import noteReducer from '../features/noteSlice'
import filterReducer from "../features/filterSlice";

export const store = configureStore({
    reducer:{
        note: noteReducer,
        filter: filterReducer,

    },
})

export default store