import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const fetchAllProducts = createAsyncThunk('fetch-all-products', async (apiUrl) => {
    const response = await fetch(apiUrl)
    return response.json()
})


const productSlice = createSlice({
    name: 'products',
    initialState: { data: [], fetchStatus: ''},
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.data = action.payload
            state.fetchStatus = 'success'
        })
        .addCase(fetchAllProducts.pending, (state, action) => {
            state.fetchStatus = 'loading'
        })
        .addCase(fetchAllProducts.rejected, (state, action) => {
            state.fetchStatus = 'error'
        });
    }

})

export default productSlice