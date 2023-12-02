import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../services';
import { addNotification, errorCatch } from '../../utils';
import { IAuthResponse, IAuthSignIn } from './auth.interface';

export const SignIn = createAsyncThunk<IAuthResponse, IAuthSignIn>('auth/signIn', async ({ email, password, callback }, thunkApi) => {
	try {
		const response = await AuthService.signIn(email, password);
		if (response.data) {
			callback(response.data);
		}
		return response.data;
	} catch (error) {
		addNotification(error);
		return thunkApi.rejectWithValue({ error: errorCatch(error) });
	}
});
