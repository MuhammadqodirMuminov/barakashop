import { ICategory } from "./category-types";
import { IProductImage } from "./image-types";

export interface IProductCard {
    id: number;
    title: string;
    description: string;
    rating: string;
    product_price: string;
    category?: ICategory;
    images: IProductImage
    count?: number;
    is_ads?: boolean;
    is_checked?: boolean;
    is_liked?: boolean;
    seller_bonus?: string;
    site_bonus?: null;
    slug?: string;
    sold?: null;
    status?: string;
    totalPrice?: null;
    created_at?: string;
    updated_at?: string;
}