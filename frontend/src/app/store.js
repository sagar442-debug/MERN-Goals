import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../feature/auth/authSlice';
import goalReducer from '../feature/goals/goalSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer
  },
});
