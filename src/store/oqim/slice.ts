import { createSlice } from '@reduxjs/toolkit';
import { SliceNames } from '../constants';
import { getAllOqim, getOneOqim } from './actions';
import { IOqimState } from './interface';

const initialState: IOqimState = {
    loading: {
        getOne: false,
        getAll: false,
    },
    oqims: null,
    oneOqim: null,
    errors: null,
};

const categorySlice = createSlice({
    name: SliceNames.category,
    initialState,
    reducers: {
        setOqimLoading: (state) => {
            state.loading.getOne = true;
            state.loading.getAll = true;
            state.errors = null;
        },
        setOqim: (state, { payload }) => {
            state.loading.getOne = false;
            state.loading.getAll = false;
            state.oqims = payload;
            state.errors = null;
        },

        setOqimFailed: (state, { payload }) => {
            state.loading.getOne = false;
            state.loading.getAll = false;
            state.errors = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getOneOqim.pending, (state) => {
                state.loading.getOne = true;
                state.errors = null;
            })
            .addCase(getOneOqim.fulfilled, (state, { payload }) => {
                state.loading.getOne = false;
                state.oneOqim = payload.data;
                state.errors = null;
            })
            .addCase(getOneOqim.rejected, (state, { payload }) => {
                state.loading.getOne = false;
                state.errors = payload as string;
            })
            .addCase(getAllOqim.pending, (state) => {
                state.loading.getAll = true;
                state.errors = null;
            })
            .addCase(getAllOqim.fulfilled, (state, { payload }) => {
                state.loading.getAll = false;
                state.oqims = payload.data;
                state.errors = null;
            })
            .addCase(getAllOqim.rejected, (state, { payload }) => {
                state.loading.getAll = false;
                state.errors = payload as string;
            });
    },
});

export const CategoryReducer = categorySlice.reducer;
export const CategorySliceActions = categorySlice.actions;
