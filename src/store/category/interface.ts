import { ICategory } from '@/types';

export interface ICategoryState {
    loading: {
        getOne: boolean;
        get: boolean;
        getRecomended: boolean;
    };
    categories: ICategory[] | null;
    recomendedCategory: ICategory | null;
    oneCategory: ICategory | null;
    errors: null | string | string[];
}
export interface IResponseCategory {
    status: number;
    data: ICategory[];
    message: string;
}

export interface IResponseOneCategory {
    status: number;
    data: ICategory;
    message: string;
}

export interface IArgCategory {
    id?: string;
}
