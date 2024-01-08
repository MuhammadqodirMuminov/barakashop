import { createSlice } from '@reduxjs/toolkit';
import { getAllPayment, getOnePayment } from './actions';
import { IPaymentState } from './interface';
import { SliceNames } from '../constants';

const initialState:IPaymentState = {
    loading: {
        getOne: false,
        getAll: false,
    },
    payment: null,
    onePayment: null,
    errors: null,
};

const PaymentSlice = createSlice({
    name: SliceNames.payment,
    initialState,
    reducers: {
        setPaymentLoading: (state) => {
            state.loading.getOne = true;
            state.loading.getAll = true;
            state.errors = null;
        },
        setPayment: (state, { payload }) => {
            state.loading.getOne = false;
            state.loading.getAll = false;
            state.payment = payload;
            state.errors = null;
        },

        setPaymentFailed: (state, { payload }) => {
            state.loading.getOne = false;
            state.loading.getAll = false;
            state.errors = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getOnePayment.pending, (state) => {
                state.loading.getOne = true;
                state.errors = null;
            })
            .addCase(getOnePayment.fulfilled, (state, { payload }) => {
                state.loading.getOne = false;
                state.onePayment = payload.data;
                state.errors = null;
            })
            .addCase(getOnePayment.rejected, (state, { payload }) => {
                state.loading.getOne = false;
                state.errors = payload as string;
            })
            .addCase(getAllPayment.pending, (state) => {
                state.loading.getAll = true;
                state.errors = null;
            })
            .addCase(getAllPayment.fulfilled, (state, { payload }) => {
                state.loading.getAll = false;
                state.payment = payload.data;
                state.errors = null;
            })
            .addCase(getAllPayment.rejected, (state, { payload }) => {
                state.loading.getAll = false;
                state.errors = payload as string;
            });
    },
});

export const PaymentReducer = PaymentSlice.reducer;
export const PaymentSliceActions = PaymentSlice.actions;
