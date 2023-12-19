import { MainSlider, ProductSlider, ProductsBanners, ProductsOilsSection } from '@/components';
import { products as tempProducts, tempAds } from '@/constants';
import * as S from './styled';
import { useActions, useTypedSelector } from '@/hooks';
import { useEffect } from 'react';

export const Home = () => {
	const { getAllAds, getAllProduct, getRecomendedProduct, getFrequentlyProduct, getNewestProduct } = useActions();
	const { recomendedProducts, frequentlyProducts, newestProducts } = useTypedSelector(state => state.product);
	const { ads } = useTypedSelector(state => state.ads);
	
	useEffect(() => {
		getAllProduct({});
		getRecomendedProduct({});
		getFrequentlyProduct({});
		getNewestProduct({});
		getAllAds({});
	}, []);

	return (
		<S.Main>
			<S.Top>
				<S.WrapperSlide>
					<MainSlider
						ads={ads || tempAds}
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

					<ProductSlider items={recomendedProducts || tempProducts} title={'Recomended products'} />

					<ProductSlider items={frequentlyProducts || tempProducts} title={'Frequently Sold'} />

					<ProductSlider items={newestProducts || tempProducts} title={'New Products'} />

				</S.WrapperSlide>
			</S.Sections>
		</S.Main>
	);
};
