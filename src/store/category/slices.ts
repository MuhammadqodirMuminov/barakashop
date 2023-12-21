import { createSlice } from '@reduxjs/toolkit';
import { SliceNames } from '../constants';
import { getAllCategories } from './actions';
import { InitialState } from './interface';

const initialState: InitialState = {
	loading: {
		get: false,
	},
	categories: null,
	error: null,
};

const categorySlice = createSlice({
	name: SliceNames.category,
	initialState,
	reducers: {
		categoryLoading: state => {
			state.loading.get = true;
			state.error = null;
		},
		categorySuccess: (state, { payload }) => {
			(state.loading.get = false), (state.categories = payload);
		},

		categoryFailed: (state, { payload }) => {
			state.error = payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getAllCategories.pending, state => {
				state.loading.get = true;
				state.error = null;
			})
			.addCase(getAllCategories.fulfilled, (state, { payload }) => {
				state.error = null;
				state.categories = payload;
				state.loading.get = false;
			})
			.addCase(getAllCategories.rejected, (state, { payload }) => {
				state.error = payload;
				state.loading.get = false;
			});
	},
});

export const CategoryReducer = categorySlice.reducer;
export const CategorySliceActions = categorySlice.actions;
