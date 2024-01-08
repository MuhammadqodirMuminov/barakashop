import { createSlice } from '@reduxjs/toolkit';
import { SliceNames } from '../constants';
import {
    getAllCategory,
    getOneCategory,
    getRecomendedCategory,
} from './actions';
import { ICategoryState } from './interface';

const initialState: ICategoryState = {
    loading: {
        getOne: false,
        get: false,
        getRecomended: false,
    },
    categories: null,
    recomendedCategory: null,
    oneCategory: null,
    errors: null,
};

const categorySlice = createSlice({
    name: SliceNames.category,
    initialState,
    reducers: {
        setCategoryLoading: (state) => {
            state.loading.getOne = true;
            state.loading.get = true;
            state.loading.getRecomended = true;
            state.errors = null;
        },
        setCategory: (state, { payload }) => {
            state.loading.getOne = false;
            state.loading.get = false;
            state.loading.getRecomended = false;
            state.categories = payload;
            state.errors = null;
        },

        setCategoryFailed: (state, { payload }) => {
            state.loading.getOne = false;
            state.loading.get = false;
            state.loading.getRecomended = false;
            state.errors = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getOneCategory.pending, (state) => {
                state.loading.getOne = true;
                state.errors = null;
            })
            .addCase(getOneCategory.fulfilled, (state, { payload }) => {
                state.loading.getOne = false;
                state.oneCategory = payload.data;
                state.errors = null;
            })
            .addCase(getOneCategory.rejected, (state, { payload }) => {
                state.loading.getOne = false;
                state.errors = payload as string;
            })
            .addCase(getAllCategory.pending, (state) => {
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
            })
            .addCase(getRecomendedCategory.pending, (state) => {
                state.loading.getRecomended = true;
                state.errors = null;
            })
            .addCase(getRecomendedCategory.fulfilled, (state, { payload }) => {
                state.loading.getRecomended = false;
                state.recomendedCategory = payload.data;
                state.errors = null;
            })
            .addCase(getRecomendedCategory.rejected, (state, { payload }) => {
                state.loading.getRecomended = false;
                state.errors = payload as string;
            });
    },
});

export const CategoryReducer = categorySlice.reducer;
export const CategorySliceActions = categorySlice.actions;
