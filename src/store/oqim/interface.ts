import { ICreateOqimBody } from '@/services/oqim/types';
import { IAdmin, IOqim } from '@/types';

export interface IOqimState {
    loading: {
        getOne: boolean;
        getOneByUserId: boolean;
        getAll: boolean;
        create: boolean;
    };
    oqims: IOqim[] | null;
    oneOqim: IOqim | null;
    oneOqimByUserId: IAdmin | null;
    createOqim: IOqim | null;
    errors: null | string | string[];
}
export interface IResponseOqim {
    status: number;
    data: IOqim[];
    message: string;
}

export interface IResponseOneOqimByIdUser {
    status: number;
    data: IAdmin;
    message: string;
}

export interface IResponseOneOqim {
    status: number;
    data: IOqim;
    message: string;
}

export interface ICreateOqimArg extends ICreateOqimBody {}

export interface IArgOqim {
    id?: string;
}
