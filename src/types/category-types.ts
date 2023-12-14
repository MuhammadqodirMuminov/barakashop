import { IProductCard } from './card-types';

export interface ICategory {
	id: number;
	title: string;
	categoty_image: string;
	description?: string;
	recommendation?: null;
	sort_order?: null;
	is_active?: boolean;
	created_at?: string;
	updated_at?: string;
	products?: IProductCard[] | null;
}
