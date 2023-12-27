import { IOqim } from '@/types';

export enum UserType {
    ADMIN = 'admin',
    USER = 'user',
    SUPERADMIN = 'superadmin',
    OPERATOR = 'operator',
}

export interface IAdmin {
    id: number;
    username: string;
    password?: string;
    role: UserType;
    phone: string;
    email: string;
    telegram_chat_id: number;
    avatar: string;
    created_at: string;
    updated_at: string;
    oqims: IOqim[];
    // orders: ;
    // payments: ;
    // admin: null;
}
