import { createSlice } from '@reduxjs/toolkit';

export const sliceRecipes = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
  },
  reducers: {},
});

export default sliceRecipes.reducer;
