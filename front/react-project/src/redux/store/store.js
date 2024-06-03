import { configureStore } from '@reduxjs/toolkit'
import TrekkingReducer from '../slices/TrekkingSlice'

export const store = configureStore({
  reducer: {
    trekkings: TrekkingReducer,
  },
})