
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { loginSlice } from './login'



export default configureStore({
    reducer: {
        auth: loginSlice.reducer
    }
  })