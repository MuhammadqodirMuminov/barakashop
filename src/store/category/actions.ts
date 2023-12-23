import { CategoryService } from '@/services';
import { EndPointes } from '@/services/endpoints';
import { errorCatch } from '@/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IArgCategory, IResponseCategory, IResponseOneCategory } from './interface';

export const getOneCategory = createAsyncThunk<IResponseOneCategory, IArgCategory>(EndPointes.category.getOne, async ({ id }, thunkApi) => {
	try {
		const response = await CategoryService.getOne(id as string);
		if (response.data) {
			return response.data;
		}
	} catch (error) {
		return thunkApi.rejectWithValue({ error: errorCatch(error)});
	}
})

export const getAllCategory = createAsyncThunk<IResponseCategory, IArgCategory>(EndPointes.category.getAll, async (_, thunkApi) => {
	try {
		const response = await CategoryService.getAll();
		if (response.data) {
			return response.data;
		}
	} catch (error) {
		return thunkApi.rejectWithValue({ error: errorCatch(error) });
	}
});

export const getRecomendedCategory = createAsyncThunk<IResponseOneCategory, IArgCategory>(EndPointes.category.getRecomended, async (_, thunkApi) => {
	try {
		const response = await CategoryService.getRecomended();
		if (response.data) {
			return response.data;
		}
	} catch (error) {
		return thunkApi.rejectWithValue({ error: errorCatch(error)});
	}
})