import { IProductDetail } from "./product-detail";

export interface ICategory {
  id: number;
  title: string;
  description: string;
  is_active: boolean;
  categoty_image: string;
  recommendation: null;
  sort_order: null;
  created_at: string;
  updated_at: string;
  products: IProductDetail[] | null;
}
