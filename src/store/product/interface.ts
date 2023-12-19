import { IProductCard } from '@/types';

export interface IProductState {
    loading: {
        getAll: boolean;
        getRecomended: boolean;
        getFrequently: boolean;
        getNewest: boolean;
        getOne: boolean;
    };
    products: IProductCard[] | null;
    recomendedProducts: IProductCard[] | null;
    frequentlyProducts: IProductCard[] | null;
    newestProducts: IProductCard[] | null;
    oneProduct: IProductCard | null;
    errors: null | string | string[];
}
export interface IResponseProduct {
    status: number;
    data: IProductCard[];
    message: string;
}
export interface IResponseOneProduct {
    status: number;
    data: IProductCard;
    message: string;
}

export interface IArgProduct {
    id?: string;
}
