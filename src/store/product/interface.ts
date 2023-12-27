import { IOnSaleProductQuery } from '@/services/product/types';
import { IProductCard } from '@/types';

export interface IProductState {
    loading: {
        getOne: boolean;
        getAll: boolean;
        getRecomended: boolean;
        getFrequently: boolean;
        getNewest: boolean;
        getOnSale: boolean;
    };
    oneProduct: IProductCard | null;
    products: IProductCard[] | null;
    recomendedProducts: IProductCard[] | null;
    frequentlyProducts: IProductCard[] | null;
    newestProducts: IProductCard[] | null;
    onSaleProducts: IProductCard[] | null;
    selectProduct: IProductCard | null;
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

export interface IOnSaleProductArg extends IOnSaleProductQuery {}
