import { CategoryService } from '@/services/category';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNotification, errorCatch } from '../../utils';
import { ICategoryArgs } from './interface';

export const getAllCategories = createAsyncThunk<any, ICategoryArgs>('category/all', async ({ callback }, thunkApi) => {
	try {
		const response = await CategoryService.getAll();
		if (response.data) {
			callback();
		}
		return response.data;
	} catch (error) {
		addNotification(error);
		return thunkApi.rejectWithValue({ error: errorCatch(error) });
	}
});
