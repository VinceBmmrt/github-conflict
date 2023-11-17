import { configureStore } from '@reduxjs/toolkit';
import recipiesReducer from './reducers/recipes';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    recipes: recipiesReducer,
  },
});
