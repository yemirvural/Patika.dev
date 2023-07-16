import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk('basket/getProducts', async() => {
    const res = await axios(`http://localhost:5000/products`);
    return res.data;
})
export const setProductCount = createAsyncThunk('basket/setProductCount', async({id, data}) => {
    const res = await axios.patch(`http://localhost:5000/products/${id}`, {data});
    return res.data;
})

const calculateBalance = (items) => {
    let receivedTotal = 0;
    items.map((el) => (receivedTotal += el.amount * el.cost));
    return 100000000000 - receivedTotal;
};

export const basketSlice = createSlice({
    name: "basket",
    initialState:{
        items: [],
        balance: 100000000000,
        receivedTotal: 0,
        isLoading: false,
        error: null
    },
    reducers: {
    },
    extraReducers:{
        [getProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [getProducts.rejected]: (state, action) => {
            state.isLoading = false; 
            state.error = action.error.message;  
        },
        [getProducts.fulfilled]: (state, action) => {
            state.isLoading = false; 
            state.items = action.payload;
            state.balance = calculateBalance(state.items);
            state.receivedTotal = action.payload.reduce((total, el) => total + el.amount * el.cost, 0);
        },
        [setProductCount.fulfilled]: (state, action) => {
            const id = action.payload.id;
            state.items[id] = action.payload;
            state.balance = calculateBalance(state.items);
            state.receivedTotal = state.items.reduce((total, el) => total + el.amount * el.cost, 0);
        },
    }
})

export default basketSlice.reducer