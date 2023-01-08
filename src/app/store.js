import { configureStore } from '@reduxjs/toolkit'
import mailReducer from '../features/mailSlice'
import userReducer from '../features/userSlice'
import themeReducer from '../features/themeSlice'
export const store = configureStore({
  reducer: {
    mail:mailReducer,
    user:userReducer,
    theme:themeReducer
  },
})