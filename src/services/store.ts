import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { jsonplaceholderApi } from './api/placeholdersApi'

export const store = configureStore({
  reducer: {
    [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonplaceholderApi.middleware),
})

setupListeners(store.dispatch)
