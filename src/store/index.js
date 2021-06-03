import { configureStore } from '@reduxjs/toolkit'

import authSliceReducer from './auth-slice'

const store = configureStore({
  reducer: {
    authentication: authSliceReducer,
  },
})

export default store
