import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllProducts = createAsyncThunk(
    'products/getAllData',
    async () => {
      const response = await axios.get("http://localhost:5050/products")
      return response.data
    },
  )

const initialState = {
  products: [],
}

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products=[...action.payload]
    })
  },
})

export const { } = ProductSlice.actions

export default ProductSlice.reducer