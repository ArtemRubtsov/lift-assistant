import { configureStore } from '@reduxjs/toolkit'
import liftsReducer from './liftSlice'

export const store = configureStore({
  reducer: {
    lifts: liftsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
