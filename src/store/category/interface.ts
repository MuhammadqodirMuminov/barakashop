export interface InitialState {
	categories: null;
	loading: {
		get: boolean;
	};
	error: null | string | unknown;
}

export interface IAuthResponse {}