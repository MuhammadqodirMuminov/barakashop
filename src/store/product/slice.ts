import { createSlice } from '@reduxjs/toolkit';
import { SliceNames } from '../constants';
import {
    getAllProduct,
    getFrequentlyProduct,
    getNewestProduct,
    getOneProduct,
    getRecomendedProduct,
} from './actions';
import { IProductState } from './interface';

const initialState: IProductState = {
    loading: {
        getAll: false,
        getRecomended: false,
        getFrequently: false,
        getNewest: false,
        getOne: false,
    },
    products: null,
    recomendedProducts: null,
    frequentlyProducts: null,
    newestProducts: null,
    oneProduct: null,
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
            })
            .addCase(getRecomendedProduct.pending, (state) => {
                state.loading.getRecomended = true;
                state.errors = null;
            })
            .addCase(getRecomendedProduct.fulfilled, (state, { payload }) => {
                state.loading.getRecomended = false;
                state.recomendedProducts = payload.data;
                state.errors = null;
            })
            .addCase(getRecomendedProduct.rejected, (state, { payload }) => {
                state.loading.getRecomended = false;
                state.errors = payload as string;
            })
            .addCase(getFrequentlyProduct.pending, (state) => {
                state.loading.getFrequently = true;
                state.errors = null;
            })
            .addCase(getFrequentlyProduct.fulfilled, (state, { payload }) => {
                state.loading.getFrequently = false;
                state.frequentlyProducts = payload.data;
                state.errors = null;
            })
            .addCase(getFrequentlyProduct.rejected, (state, { payload }) => {
                state.loading.getFrequently = false;
                state.errors = payload as string;
            })
            .addCase(getNewestProduct.pending, (state) => {
                state.loading.getNewest = true;
                state.errors = null;
            })
            .addCase(getNewestProduct.fulfilled, (state, { payload }) => {
                state.loading.getNewest = false;
                state.newestProducts = payload.data;
                state.errors = null;
            })
            .addCase(getNewestProduct.rejected, (state, { payload }) => {
                state.loading.getNewest = false;
                state.errors = payload as string;
            })
            .addCase(getOneProduct.pending, (state) => {
                state.loading.getNewest = true;
                state.errors = null;
            })
            .addCase(getOneProduct.fulfilled, (state, { payload }) => {
                state.loading.getOne = false;
                state.oneProduct = payload.data;
                state.errors = null;
            })
            .addCase(getOneProduct.rejected, (state, { payload }) => {
                state.loading.getOne = false;
                state.errors = payload as string;
            });
    },
});

export const ProductReducer = productSlice.reducer;
export const ProductSliceActions = productSlice.actions;
