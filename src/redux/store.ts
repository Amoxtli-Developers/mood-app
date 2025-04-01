// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import watsonReducer from '@/redux/reducers/watsonReducer';

const store = configureStore({
  reducer: {
    watson: watsonReducer,
  },
});

// Export the store and type helpers if needed
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
