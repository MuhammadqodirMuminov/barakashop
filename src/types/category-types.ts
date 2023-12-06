import { IProductCard } from './card-types';

export interface ICategory {
	id: number;
	title: string;
	description: string;
	categoty_image: string;
	recommendation?: null;
	sort_order?: null;
	is_active?: boolean;
	created_at?: string;
	updated_at?: string;
	products?: IProductCard[] | null;
}
