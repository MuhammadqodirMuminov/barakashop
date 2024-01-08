import { MainSlider, ProductSlider, ProductsBanners, ProductsOilsSection } from '@/components';
import { products as tempProducts, tempAds, tempCategories,  } from '@/constants';
import * as S from './styled';
import { useActions, useTypedSelector } from '@/hooks';
import { useEffect } from 'react';

export const Home = () => {
	const { getAllAds, getAllProduct, getRecomendedProduct, getFrequentlyProduct, getNewestProduct, getAllCategory, getRecomendedCategory } = useActions();
	const state = useTypedSelector(state => state);
	const { recomendedProducts, frequentlyProducts, newestProducts } = state.product;
	const { ads } = state.ads;
	const { categories } = state.category;
	
	useEffect(() => {
		getAllProduct({});
		getRecomendedProduct({});
		getFrequentlyProduct({});
		getNewestProduct({});
		getAllAds({});
		getAllCategory({})
		getRecomendedCategory({});
	}, []);

	return (
		<S.Main>
			<S.Top>
				<S.WrapperSlide>
					<MainSlider ads={ads || tempAds} />
				</S.WrapperSlide>
			</S.Top>

			<S.Sections>
				<S.WrapperSlide>
					<ProductsOilsSection />

					<ProductsBanners titles='Top categories' categories={categories || tempCategories} />

					<ProductSlider items={recomendedProducts || tempProducts} title={'Recomended products'} />

					<ProductSlider items={frequentlyProducts || tempProducts} title={'Frequently Sold'} />

					<ProductSlider items={newestProducts || tempProducts} title={'New Products'} />

				</S.WrapperSlide>
			</S.Sections>
		</S.Main>
	);
};
