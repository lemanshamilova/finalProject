import { configureStore } from '@reduxjs/toolkit'
import TrekkingReducer from '../slices/TrekkingSlice'
import ProductReducer from '../slices/ProductSlice'


export const store = configureStore({
  reducer: {
    trekkings: TrekkingReducer,
    products:ProductReducer
  },
})