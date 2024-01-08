import { IProductCard } from '.';

export interface ICategory {
    id: number;
    title: string;
    description: string;
    categoty_image: string;
    is_active?: true;
    recommendation?: string;
    sort_order?: string;
    created_at?: string;
    updated_at?: string;
    products?: IProductCard[];
}

export interface IDetail {
    id: number;
    title: string;
    description: string;
    is_ads: boolean;
    is_checked: boolean;
    product_price: string;
    seller_bonus: string;
    site_bonus: null;
    totalPrice: null;
    count: number;
    rating: string;
    slug: string;
    status: string;
    is_liked: boolean;
    sold: null;
    created_at: Date;
    updated_at: Date;
    category: null;
    images: Images;
}

export interface Images {
    id: number;
    urls: string[];
    description: string;
    created_at: Date;
    updated_at: Date;
}
