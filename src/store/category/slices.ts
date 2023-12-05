import { createSlice } from '@reduxjs/toolkit';
import { SliceNames } from '../constants';

const categorySlice = createSlice({
	name: SliceNames.category,
	initialState: {},
	reducers: {},
});

export const CategoryReducer = categorySlice.reducer;
export const CategorySliceActions = categorySlice.actions;
