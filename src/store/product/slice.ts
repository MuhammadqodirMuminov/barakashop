import { createSlice } from '@reduxjs/toolkit';
import { SliceNames } from '../constants';
import { getAllProduct } from './actions';
import { IProductState } from './interface';

const initialState: IProductState = {
    loading: {
        getAll: false,
    },
    products: null,
    newestProducts: null,
    errors: null,
};

const productSlice = createSlice({
    name: SliceNames.product,
    initialState,
    reducers: {
        setProductLoading: (state) => {
            state.loading.getAll = true;
            state.errors = null;
        },
        setProduct: (state, { payload }) => {
            state.loading.getAll = false;
            state.products = payload;
            state.errors = null;
        },

        setProductFailed: (state, { payload }) => {
            state.loading.getAll = false;
            state.errors = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProduct.pending, (state) => {
                state.loading.getAll = true;
                state.errors = null;
            })
            .addCase(getAllProduct.fulfilled, (state, { payload }) => {
                state.loading.getAll = false;
                state.products = payload.data;
                state.errors = null;
            })
            .addCase(getAllProduct.rejected, (state, { payload }) => {
                state.loading.getAll = false;
                state.errors = payload as string;
            });
    },
});

export const ProductReducer = productSlice.reducer;
export const ProductSliceActions = productSlice.actions;
