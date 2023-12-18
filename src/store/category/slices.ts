import { createSlice } from "@reduxjs/toolkit";
import { SliceNames } from "../constants";
import { InitialState } from "./interface";
import { Category } from "./actions";

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
    categoryLoading: (state) => {
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
		builder.addCase(Category.pending, state => {
      state.loading.get = true;
      state.error = null;
    })
    .addCase(Category.fulfilled, (state, { payload }) => {
      state.error = null;
      state.categories = payload;
      state.loading.get = false;

    })
    .addCase(Category.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading.get = false;
    
    });
	}
});

export const CategoryReducer = categorySlice.reducer;
export const CategorySliceActions = categorySlice.actions;
