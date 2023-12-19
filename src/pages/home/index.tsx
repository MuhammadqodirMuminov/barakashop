import { MainSlider, ProductSlider, ProductsBanners, ProductsOilsSection } from '@/components';
import { products as tempProducts} from '@/constants';
import * as S from './styled';
import { useActions, useTypedSelector } from '@/hooks';
import { useEffect } from 'react';

export const Home = () => {
	const { getAllProduct, getRecomendedProduct, getFrequentlyProduct, getNewestProduct } = useActions();
	const { products, recomendedProducts, frequentlyProducts, newestProducts } = useTypedSelector(state => state.product)
	
	useEffect(() => {
		getAllProduct({})
		getRecomendedProduct({})
		getFrequentlyProduct({})
		getNewestProduct({})
	}, [])
	
	console.log('products', products);
	console.log('new products', recomendedProducts);

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

					<ProductSlider items={frequentlyProducts || tempProducts} title={'Friquendly Sold'} />

					<ProductSlider items={newestProducts || tempProducts} title={'New Products'} />

					<ProductSlider items={newestProducts || tempProducts} title={'Discounded products'} />
				</S.WrapperSlide>
			</S.Sections>
		</S.Main>
	);
};
