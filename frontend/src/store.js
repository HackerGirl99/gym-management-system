// Import necessary functions and slices from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
//import cartSliceReducer from './slices/cartSlice';
import authSliceReducer from './slices/authSlice';
import searchEquipmentSliceReducer from './slices/searchEquipmentSlice'; // Modified import

// Configure the Redux store
const store = configureStore({
  // Combine reducers for different slices
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // API-related state reducer
    auth: authSliceReducer, // Authentication state reducer
    search: searchEquipmentSliceReducer // Modified slice reducer
  },

  // Add middleware to the Redux store
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware) // Add API middleware
});

// Export the configured Redux store for use in the application
export default store;
