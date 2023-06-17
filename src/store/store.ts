import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { modalSlice } from './modal/modal.slice'
import { userSlice } from './user/user.slice'

const rootReducer = combineReducers({
  modal: modalSlice.reducer,
  user: userSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
