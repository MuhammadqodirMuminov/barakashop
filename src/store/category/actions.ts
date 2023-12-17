import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNotification, errorCatch } from '../../utils';
import { IAuthResponse } from './interface';
import { CategoryService } from '@/services/category';

export const Category = createAsyncThunk<IAuthResponse>('category/all', async ({ callback }, thunkApi) => {
	try {
		const response = await CategoryService.getAll();
		if (response.data) {
			callback(response.data);
		}
		return response.data;
	} catch (error) {
		addNotification(error);
		return thunkApi.rejectWithValue({ error: errorCatch(error) });
	}
});
