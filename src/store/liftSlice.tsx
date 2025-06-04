import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Lifts } from '../types/types'
import { addLiftToStorage, fetchLiftsFromStorage } from '../db/db'


interface LiftsState {
  lifts: Lifts[]
}

const initialState: LiftsState = {
  lifts: [],
}

// Асинхронный thunk для загрузки лифтов
export const fetchLifts = createAsyncThunk('lifts/fetch', async () => {
  const data = await fetchLiftsFromStorage()
  return data
})

// Асинхронный thunk для добавления лифта
export const addLift = createAsyncThunk(
  'lifts/add',
  async (lift: Lifts, { dispatch }) => {
    await addLiftToStorage(lift)
    // После добавления перезагружаем список
    dispatch(fetchLifts())
  }
)

const liftsSlice = createSlice({
  name: 'lifts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLifts.fulfilled, (state, action: PayloadAction<Lifts[]>) => {
      state.lifts = action.payload
    })
  },
})

export default liftsSlice.reducer

