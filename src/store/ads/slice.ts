import { createSlice } from '@reduxjs/toolkit';
import { IAdsState } from './interface';
import { SliceNames } from '../constants';
import { getAllAds } from './actions';

const initialState: IAdsState = {
    loading: {
        getAll: false,
    },
    ads: null,
    errors: null,
};

const adsSlice = createSlice({
    name: SliceNames.ads,
    initialState,
    reducers: {
        setAdsLoading: (state) => {
            state.loading.getAll = true;
            state.errors = null;
        },
        setAds: (state, { payload }) => {
            state.loading.getAll = false;
            state.ads = payload;
            state.errors = null;
        },

        setAdsFailed: (state, { payload }) => {
            state.loading.getAll = false;
            state.errors = payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getAllAds.pending, (state) => {
                state.loading.getAll = true;
                state.errors = null;
            })
            .addCase(getAllAds.fulfilled, (state, { payload }) => {
                state.loading.getAll = false;
                state.ads = payload.data;
                state.errors = null;
            })
            .addCase(getAllAds.rejected, (state, { payload }) => {
                state.loading.getAll = false;
                state.errors = payload as string;
            });
    },
});

export const AdsReducer = adsSlice.reducer;
export const AdsSliceActions = adsSlice.actions;
