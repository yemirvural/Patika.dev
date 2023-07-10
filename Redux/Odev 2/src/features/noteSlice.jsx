import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: 'note',
    initialState: {
        items: []
    },
    reducers:{
        addNote: (state, action) => {
            state.items = [...state.items, action.payload]
        }
    }
})

export const { addNote } = noteSlice.actions
export default noteSlice.reducer