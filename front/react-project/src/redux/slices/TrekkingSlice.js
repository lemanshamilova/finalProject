import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllData = createAsyncThunk(
    'trekkings/getAllData',
    async () => {
      const response = await axios.get("http://localhost:5050/trekkings")
      return response.data
    },
  )

const initialState = {
  trekkings: [],
}

export const TrekkingSlice = createSlice({
  name: 'trekkings',
  initialState,
  reducers: {
  
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.trekkings=[...action.payload]
    })
  },
})

export const { } = TrekkingSlice.actions

export default TrekkingSlice.reducer