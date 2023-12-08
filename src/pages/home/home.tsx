import { AdsSlider, CategorySlider, ProductSlider } from '@/components';

export const Home = () => {
	return (
		<div>
			<ProductSlider
				items={[
					{
						id: 1,
						title: 'Samsung A03s',
						product_price: '30000',
						rating: '3.4',
						images: { id: 1, urls: [''], description: 'ok' },
						description: 'Android Samsung Galaxy',
					},
					{
						id: 2,
						title: 'Samsung A03s',
						product_price: '30000',
						rating: '3.4',
						images: { id: 1, urls: [''], description: 'ok' },
						description: 'Android Samsung Galaxy',
					},
					{
						id: 3,
						title: 'Samsung A03s',
						product_price: '30000',
						rating: '3.4',
						images: { id: 1, urls: [''], description: 'ok' },
						description: 'Android Samsung Galaxy',
					},
					{
						id: 1,
						title: 'Samsung A03s',
						product_price: '30000',
						rating: '3.4',
						images: { id: 1, urls: [''], description: 'ok' },
						description: 'Android Samsung Galaxy',
					},
					{
						id: 2,
						title: 'Samsung A03s',
						product_price: '30000',
						rating: '3.4',
						images: { id: 1, urls: [''], description: 'ok' },
						description: 'Android Samsung Galaxy',
					},
					{
						id: 3,
						title: 'Samsung A03s',
						product_price: '30000',
						rating: '3.4',
						images: { id: 1, urls: [''], description: 'ok' },
						description: 'Android Samsung Galaxy',
					},
				]}
			/>
			<CategorySlider
				items={[
					{ id: 1, title: 'Samsung A03s', description: 'Android Galaxy' },
					{ id: 2, title: 'Samsung A03s', description: 'Android Galaxy' },
					{ id: 3, title: 'Samsung A03s', description: 'Android Galaxy' },
					{ id: 4, title: 'Samsung A03s', description: 'Android Galaxy' },
				]}
			/>

			<AdsSlider
				items={[
					{
						title: 'Android Galaxy',
						description: 'Android Galaxy',
						image: '',
					},
					{
						title: 'Android Galaxy',
						description: 'Android Galaxy',
						image: '',
					},
				]}
			/>
		</div>
	);
};
