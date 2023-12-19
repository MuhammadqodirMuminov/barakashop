import { IAds } from '@/types';

export interface IAdsState {
    loading: {
        getAll: boolean;
    };
    ads: IAds[] | null;
    errors: null | string | string[];
}

export interface IResponseAds {
    status: number;
    data: IAds[];
    message: string;
}

export interface IArgAds {}
