import { createSlice } from '@reduxjs/toolkit'

const authInitialState = {
  isAuthenticated: false,
}

const AuthSlice = createSlice({
  name: 'authentication',
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
    },
  },
})

export default AuthSlice
export const authActions = AuthSlice.actions
