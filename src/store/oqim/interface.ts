import { IOqim } from '@/types';

export interface IOqimState {
    loading: {
        getOne: boolean;
        getAll: boolean;
    };
    oqims: IOqim[] | null;
    oneOqim: IOqim | null;
    errors: null | string | string[];
}
export interface IResponseOqim {
    status: number;
    data: IOqim[];
    message: string;
}

export interface IResponseOneOqim {
    status: number;
    data: IOqim;
    message: string;
}

export interface IArgOqim {
    id?: string;
}
