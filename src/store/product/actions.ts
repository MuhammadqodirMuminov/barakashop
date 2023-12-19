import { ProductService } from '@/services';
import { addNotification, errorCatch } from '@/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IArgProduct, IResponseOneProduct, IResponseProduct } from './interface';
import { EndPointes } from '@/services/endpoints';

export const getAllProduct = createAsyncThunk<IResponseProduct, IArgProduct>(EndPointes.product.getAll, async (_, thunkApi) => {
    try {
        const response = await ProductService.getAll();
        if (response.data) {
            return response.data;
        }
    } catch (error) {
            addNotification(error);
            return thunkApi.rejectWithValue({ error: errorCatch(error) });
        }
    }
);

export const getRecomendedProduct = createAsyncThunk<IResponseProduct, IArgProduct>(EndPointes.product.getRecomended, async (_, thunkApi) => {
    try {
        const response = await ProductService.getRecomended();        
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        addNotification(error);
        return thunkApi.rejectWithValue({ error: errorCatch(error) });
    }
});

export const getFrequentlyProduct = createAsyncThunk<IResponseProduct, IArgProduct>(EndPointes.product.getFrequently, async (_, thunkApi) => {
    try {
        const response = await ProductService.getFrequentlySold();
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        addNotification(error);
        return thunkApi.rejectWithValue({ error: errorCatch(error) });
    }
});

export const getNewestProduct = createAsyncThunk<IResponseProduct, IArgProduct>(EndPointes.product.getNewest,async (_, thunkApi) => {
    const response = await ProductService.getNewest();
        try {
            if (response.data) {
                return response.data;
            }
        } catch (error) {
            addNotification(error);
            return thunkApi.rejectWithValue({ error: errorCatch(error) });
        }
    }
);

export const getOneProduct = createAsyncThunk<IResponseOneProduct, IArgProduct>(EndPointes.product.getOne,async ({ id }, thunkApi) => {
    const response = await ProductService.getOne(id as string);
        try {
            if (response.data) {
                return response.data;
            }
        } catch (error) {
            addNotification(error);
            return thunkApi.rejectWithValue({ error: errorCatch(error) });
        }
    }
);