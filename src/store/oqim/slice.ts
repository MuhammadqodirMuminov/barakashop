import { createSlice } from '@reduxjs/toolkit';
import { SliceNames } from '../constants';
import {
    createOqim,
    // getAllOqim,
    getOneOqim,
    getOneOqimByUserId,
} from './actions';
import { IOqimState } from './interface';

const initialState: IOqimState = {
    loading: {
        getOne: false,
        getOneByUserId: false,
        getAll: false,
        create: false,
    },
    oqims: null,
    oneOqim: null,
    oneOqimByUserId: null,
    createOqim: null,
    errors: null,
};

const oqimSlice = createSlice({
    name: SliceNames.oqim,
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
            .addCase(getOneOqimByUserId.pending, (state) => {
                state.loading.getOneByUserId = true;
                state.errors = null;
            })
            .addCase(getOneOqimByUserId.fulfilled, (state, { payload }) => {
                state.loading.getOneByUserId = false;
                state.oneOqimByUserId = payload.data;
                state.errors = null;
            })
            .addCase(getOneOqimByUserId.rejected, (state, { payload }) => {
                state.loading.getOneByUserId = false;
                state.errors = payload as string;
            })
            // .addCase(getAllOqim.pending, (state) => {
            //     state.loading.getAll = true;
            //     state.errors = null;
            // })
            // .addCase(getAllOqim.fulfilled, (state, { payload }) => {
            //     state.loading.getAll = false;
            //     state.oqims = payload.data;
            //     state.errors = null;
            // })
            // .addCase(getAllOqim.rejected, (state, { payload }) => {
            //     state.loading.getAll = false;
            //     state.errors = payload as string;
            // })
            .addCase(createOqim.pending, (state) => {
                state.loading.create = true;
                state.errors = null;
            })
            .addCase(createOqim.fulfilled, (state, { payload }) => {
                state.loading.create = false;
                state.createOqim = payload.data;
                state.errors = null;
            })
            .addCase(createOqim.rejected, (state, { payload }) => {
                state.loading.create = false;
                state.errors = payload as string;
            });
    },
});

export const OqimReducer = oqimSlice.reducer;
export const OqimSliceActions = oqimSlice.actions;
