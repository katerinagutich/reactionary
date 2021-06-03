import { configureStore } from '@reduxjs/toolkit'

import { authActions } from './auth-slice'

const store = configureStore({
  reducer: {
    authentication: authActions,
  },
})

export default store
