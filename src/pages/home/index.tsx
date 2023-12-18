import { MainSlider, ProductSlider, ProductsBanners, ProductsOilsSection } from '@/components';
// import { products } from '@/constants';
import * as S from './styled';
import { useActions, useTypedSelector } from '@/hooks';
import { useEffect } from 'react';
import { ProductQueryType } from '@/store/product/interface';

export const Home = () => {
	const { getAllProduct } = useActions();
	const { products } = useTypedSelector(state => state.product)
	
	useEffect(() => {
		getAllProduct({ query: ProductQueryType.all })
		getAllProduct({ query: ProductQueryType.newest })
	}, [])
	
	console.log('products', products);

	return (
		<S.Main>
			<S.Top>
				<S.WrapperSlide>
					<MainSlider
						ads={[
							{ id: 1, ads_title: 'Qaynoq yozda qaynoq aksiyalar', ads_persent: '30', ads_description: 'Olingan har bir mahsulot uchun 30% chegirma.' },
							{ id: 1, ads_title: 'Qaynoq yozda qaynoq aksiyalar', ads_persent: '30', ads_description: 'Olingan har bir mahsulot uchun 30% chegirma.' },
							{ id: 1, ads_title: 'Qaynoq yozda qaynoq aksiyalar', ads_persent: '30', ads_description: 'Olingan har bir mahsulot uchun 30% chegirma.' },
						]}
					/>
				</S.WrapperSlide>
			</S.Top>

			<S.Sections>
				<S.WrapperSlide>
					<ProductsOilsSection />

					<ProductsBanners
						titles='Top categories'
						categories={[
							{ id: 1, title: 'Catgory1', categoty_image: '' },
							{ id: 1, title: 'Catgory1', categoty_image: '' },
							{ id: 1, title: 'Catgory1', categoty_image: '' },
							{ id: 1, title: 'Catgory1', categoty_image: '' },
						]}
					/>

					<ProductSlider items={products || []} title={'Friquendly Sold'} />

					<ProductSlider items={products || []} title={'New Products'} />

					<ProductSlider items={products || []} title={'Discounded products'} />
				</S.WrapperSlide>
			</S.Sections>
		</S.Main>
	);
};
