import { createSlice } from '@reduxjs/toolkit';
import { SliceNames } from '../slice-names';

const categorySlice = createSlice({
	name: SliceNames.category,
	initialState: {},
	reducers: {},
});

export const CategoryReducer = categorySlice.reducer;
export const CategorySliceActions = categorySlice.actions;
