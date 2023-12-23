import { UserType } from '@/types';
import { AxiosResponse } from 'axios';

export interface InitialState {
    user: any | null;
    token: string | null;
    isAuth: boolean;
    loading: {
        sign: boolean;
    };
    error: null | string | unknown;
}

export interface IAuthAxiosResponse extends AxiosResponse {}

export interface IAuthResponse {
    status: number;
    message: string;
    data: IAuthData;
    refreshToken: string;
    accessToken: string;
}

export interface IAuthData {
    id: number;
    username: string;
    role: UserType;
    phone: string;
    email: string;
    telegram_chat_id: number;
    avatar: string;
    created_at: string;
}

export interface IAuthSignIn {
    username: string;
    password: string;
    // callback: (data: IAuthResponse) => void;
}
