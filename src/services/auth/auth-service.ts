import { AxiosResponse } from 'axios';
import { $axios } from '../../config';
import { saveStorage } from '../../helpers';
import { IAuthResponse, IAuthSignIn } from '../../store/auth/interface';
import { EndPointes } from '../endpoints';

export const AuthService = {
    async signIn(username: string, password: string) {
        const response = await $axios.post<
            IAuthSignIn,
            AxiosResponse<IAuthResponse>
        >(EndPointes.auth.signIn, { username, password });

        if (response.data.accessToken) {
            saveStorage(response.data);
        }
        return response;
    },

    async getMe() {
        const response = await $axios.get<IAuthResponse>(EndPointes.auth.getme);

        if (response.data.accessToken) {
            saveStorage(response.data);
        }
        return response;
    },
};
