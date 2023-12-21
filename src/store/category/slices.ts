import { createSlice } from '@reduxjs/toolkit';
import { SliceNames } from '../constants';
import { getAllCategory } from './actions';
import { ICategoryState } from './interface';

const initialState: ICategoryState = {
	loading: {
		get: false,
	},
	categories: null,
	errors: null,
};

const categorySlice = createSlice({
	name: SliceNames.category,
	initialState,
	reducers: {
		setCategoryLoading: state => {
			state.loading.get = true;
			state.errors = null;
		},
		setCategory: (state, { payload }) => {
			state.loading.get = false;
			state.categories = payload;
			state.errors = null;
		},

		setCategoryFailed: (state, { payload }) => {
			state.loading.get = false;
			state.errors = payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getAllCategory.pending, state => {
				state.loading.get = true;
				state.errors = null;
			})
			.addCase(getAllCategory.fulfilled, (state, { payload }) => {
				state.loading.get = false;
				state.categories = payload.data;
				state.errors = null;
			})
			.addCase(getAllCategory.rejected, (state, { payload }) => {
				state.loading.get = false;
				state.errors = payload as string;
			});
	},
});

export const CategoryReducer = categorySlice.reducer;
export const CategorySliceActions = categorySlice.actions;
