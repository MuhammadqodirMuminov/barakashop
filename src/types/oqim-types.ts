import { IProductCard } from './card-types';

export interface IOqim {
    oqim_id: number;
    oqim_name: string;
    oqim_link: string;
    admin_danat?: number;
    oqim_visits?: number;
    oqim_oqders?: number;
    created_at?: string;
    updated_at?: string;
    product_id?: IProductCard;
    // user_id: IUser;
}
