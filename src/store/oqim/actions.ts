import { EndPointes } from '@/services/endpoints';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    IArgOqim,
    ICreateOqimArg,
    IResponseOneOqim,
    IResponseOqim,
} from './interface';
import { errorCatch } from '@/utils';
import { OqimService } from '@/services/oqim/oqim-service';

export const getOneOqim = createAsyncThunk<IResponseOneOqim, IArgOqim>(
    EndPointes.oqim.getOne,
    async ({ id }, thunkApi) => {
        try {
            const response = await OqimService.getOne(id as string);
            if (response.data) {
                return response.data;
            }
        } catch (error) {
            return thunkApi.rejectWithValue({ error: errorCatch(error) });
        }
    }
);

export const getAllOqim = createAsyncThunk<IResponseOqim, IArgOqim>(
    EndPointes.oqim.getOne,
    async (_, thunkApi) => {
        try {
            const response = await OqimService.getAll();
            if (response.data) {
                return response.data;
            }
        } catch (error) {
            return thunkApi.rejectWithValue({ error: errorCatch(error) });
        }
    }
);

export const createOqim = createAsyncThunk<IResponseOneOqim, ICreateOqimArg>(
    EndPointes.oqim.create,
    async (body, thunkApi) => {
        try {
            const response = await OqimService.create(body);
            if (response.data) {
                return response.data;
            }
        } catch (error) {
            return thunkApi.rejectWithValue({ error: errorCatch(error) });
        }
    }
);
