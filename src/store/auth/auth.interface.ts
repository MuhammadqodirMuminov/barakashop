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
	refresh_token: string;
	access_token: string;
}

export interface IAuthData {
	// write fileds to this
}

export interface IAuthSignIn {
	email: string;
	password: string;
	callback: (data: IAuthResponse) => void;
}
