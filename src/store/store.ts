import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { modalSlice } from './modal/modal.slice'
import { userSlice } from './user/user.slice'
import { userApi } from './user/user.api'

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  modal: modalSlice.reducer,
  user: userSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
