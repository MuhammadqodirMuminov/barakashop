import { ICategory } from "./category-types";
import { IProductImage } from "./image-types";

export interface IProductCard {
    category: ICategory;
    count: number;
    created_at: string;
    description: string;
    id: number;
    is_ads: boolean;
    is_checked: boolean;
    is_liked: boolean;
    product_price: string;
    rating: string;
    seller_bonus: string;
    site_bonus: null;
    slug: string;
    sold: null;
    status: string;
    title: string;
    totalPrice: null;
    images: IProductImage
    updated_at: string;
}