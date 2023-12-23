import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '@/services';
import { errorCatch } from '@/utils';
import { IAuthResponse, IAuthSignIn } from './interface';
import { EndPointes } from '@/services/endpoints';

export const SignIn = createAsyncThunk<IAuthResponse, IAuthSignIn>(
    EndPointes.auth.signIn,
    async ({ username, password }, thunkApi) => {
        try {
            const response = await AuthService.signIn(username, password);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue({ error: errorCatch(error) });
        }
    }
);
