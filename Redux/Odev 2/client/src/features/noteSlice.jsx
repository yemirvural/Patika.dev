import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

import axios from "axios";


export const getNoteAsync = createAsyncThunk('note/getNoteAsync', async() => {
    const res = await axios('http://localhost:3000/notes');
    return res.data;
})
export const addNoteAsync = createAsyncThunk('note/addNoteAsync', async(data) => {
    const res = await axios.post('http://localhost:3000/notes', data);
    return res.data;
})
export const deleteNoteAsync = createAsyncThunk('note/deleteNoteAsync', async(id) => {
    await axios.delete(`http://localhost:3000/notes/${id}`)
    return id;
})
export const editNoteAsync = createAsyncThunk('note/editNoteAsync', async ({noteId, changedContent}) => {
    const noteUpdate = {data: changedContent}
    const res = await axios.patch(`http://localhost:3000/notes/${noteId}`, noteUpdate);
    return res.data;
  });
export const noteSlice = createSlice({
    name: 'note',
    initialState: {
        items: [],
        filter: '',
        isLoading: false,
        error: null
    },
    reducers:{
        addNote:{
            reducer:  (state, action) => {
                state.items = [...state.items, action.payload]
            },
            prepare: (content, type) => {
                const id = nanoid()
                return {
                    payload: {
                        id,
                        content,
                        type
                    }
                }
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    },
    extraReducers: {
        [getNoteAsync.pending]: (state) => {
            state.isLoading = true;
        },
        [getNoteAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [getNoteAsync.rejected]: (state, action) => {
            state.isLoading = false; 
            state.error = action.error.message;      
        },
        [addNoteAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload)
        },
        [deleteNoteAsync.fulfilled]: (state, action) => {
            const id = action.payload;
            const index = state.items.findIndex((item) => item.id === id);
            state.items.splice(index, 1)
        },
        [editNoteAsync.fulfilled]: (state, action) => {
            console.log(action.payload)
            const { id, content } = action.payload
            const index = state.items.findIndex(item => item.id === id)
            state.items[index].content = content;
            state.isLoading = false;
        }
    }
})

export const selecFilteredNotes = (state) => {
    return state.note.items.filter((note) => 
        note.content.toLowerCase().includes(state.note.filter.toLowerCase()) || note.type.toLowerCase() === state.note.filter.toLowerCase()
    )
}

export const { addNote, setFilter } = noteSlice.actions
export default noteSlice.reducer