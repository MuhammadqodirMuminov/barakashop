import { oilsImg } from '@/assets';
import { products as tempProducts } from '@/constants';
import { CustomButton, ProductCard } from '@/ui';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Skeleton, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as S from './styled';
import { useTypedSelector } from '@/hooks';

export const ProductsOilsSection = () => {
	const loading: boolean = !useTypedSelector(state => state.category.loading.getRecomended);
	const category = useTypedSelector(state => state.category.recomendedCategory);	
	const products = loading ? category?.products : tempProducts;

	const oilsProductsCards = products?.map((product, i) => {
		return (
			<SwiperSlide key={i}>
				<ProductCard product={product} />
			</SwiperSlide>
		);
	});

	return (
		<S.ProductsOilsSection>
			<S.Top>
				<Skeleton height={'28px'} isLoaded={loading}>
					<Text fontSize={{ sm: 22, md: 24, lg: 28 }} fontStyle={'normal'} fontWeight={'bolder'} variant='h1'>
						Recommended category products
					</Text>
				</Skeleton>

				<Skeleton height={'28px'} isLoaded={loading}>
					<Link to='/'>
						<CustomButton text='Barcha mahsulotlar' image={<ArrowForwardIcon />} gap={2} />
					</Link>
				</Skeleton>
			</S.Top>

			<S.Carousel>
				<Swiper slidesPerView='auto' spaceBetween={20} breakpoints={{ 1200: { slidesPerView: 4, spaceBetween: 20 } }}>
					<SwiperSlide>
						<Skeleton isLoaded={loading} borderRadius={'10px'}>
							<Link to={`/category/${category?.id}`}>
								<S.Banner style={{ backgroundImage: `url(${oilsImg})` }}>
									<Text variant='h2' as={'p'}>
										{category?.title}
									</Text>
								</S.Banner>
							</Link>
						</Skeleton>
					</SwiperSlide>

					{oilsProductsCards}
				</Swiper>
			</S.Carousel>
		</S.ProductsOilsSection>
	);
};
