import { IProductCard } from '@/types';

export interface IProductState {
    loading: {
        getAll: boolean;
    };
    products: IProductCard[] | null;
    newestProducts: IProductCard[] | null;
    errors: null | string | string[];
}
export interface IResponseProduct {
    status: number;
    data: IProductCard[];
    message: string;
}

export enum ProductQueryType {
    all = '',
    recommended = '?recommended=true',
    friquentlySold = '?friquentlysold=true',
    newest = '?newest=true',
}

export interface IArgProduct {
    query: ProductQueryType;
}
