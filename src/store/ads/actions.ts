import { createAsyncThunk } from '@reduxjs/toolkit';
import { IArgAds, IResponseAds } from './interface';
import { EndPointes } from '@/services/endpoints';
import { AdsService } from '@/services';
import { errorCatch } from '@/utils';

export const getAllAds = createAsyncThunk<IResponseAds, IArgAds>(
    EndPointes.ads.getAll,
    async (_, thunkApi) => {
        try {
            const response = await AdsService.getAll();
            if (response.data) {
                return response.data;
            }
        } catch (error) {
            return thunkApi.rejectWithValue({ error: errorCatch(error) });
        }
    }
);
