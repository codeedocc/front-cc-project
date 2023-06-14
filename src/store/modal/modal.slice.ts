import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  isSendingData: boolean
}

const initialState: IInitialState = {
  isSendingData: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setisSendingData: (state, action) => {
      state.isSendingData = action.payload
    },
    closeModal: (state, action) => {
      state.isSendingData = action.payload
    },
  },
})

export const modalActions = modalSlice.actions
export const modalReducer = modalSlice.reducer
