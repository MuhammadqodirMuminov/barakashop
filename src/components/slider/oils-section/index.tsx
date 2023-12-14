import { oilsImg } from '@/assets';
import { products } from '@/constants';
import { CustomButton, ProductCard } from '@/ui';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as S from './styled';

interface Price {
	new: number;
	old: number;
}

interface Product {
	id: number;
	name: string;
	price: Price;
	rating: number;
	commentsNumber: number;
	productCode: number;
	img: string;
}

export const ProductsOilsSection = () => {
	const oils: Product[] = [
		{
			id: 1,
			name: 'Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.',
			price: { new: 2334, old: 2864 },
			rating: 4,
			commentsNumber: 51,
			productCode: 153789,
			img: '/',
		},
		{
			id: 2,
			name: 'Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.',
			price: { new: 2334, old: 2864 },
			rating: 4,
			commentsNumber: 51,
			productCode: 153789,
			img: '/',
		},
		{
			id: 3,
			name: 'Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.',
			price: { new: 2334, old: 2864 },
			rating: 4,
			commentsNumber: 51,
			productCode: 153789,
			img: '/',
		},
		{
			id: 4,
			name: 'Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.',
			price: { new: 2334, old: 2864 },
			rating: 4,
			commentsNumber: 51,
			productCode: 153789,
			img: '/',
		},
	];

	const oilsProductsCards = oils.map((_, i) => {
		return (
			<SwiperSlide key={i}>
				<ProductCard product={products[0]} />
			</SwiperSlide>
		);
	});

	return (
		<S.ProductsOilsSection>
			<S.Top>
				<Text fontSize={{ sm: 22, md: 24, lg: 28 }} fontStyle={'normal'} fontWeight={'bolder'} variant='h1'>
					Recommended products
				</Text>

				<Link to='/'>
					<CustomButton text='Barcha mahsulotlar' image={<ArrowForwardIcon />} gap={2} />
				</Link>
			</S.Top>

			<S.Carousel>
				<Swiper slidesPerView='auto' spaceBetween={20} breakpoints={{ 1200: { slidesPerView: 4, spaceBetween: 20 } }}>
					<SwiperSlide>
						<Link to='/'>
							<S.Banner style={{ backgroundImage: `url(${oilsImg})` }}>
								<Text variant='h2' as={'p'}>
									Lorem ipsum <br />
									dolor sit amet <br />
									consectetur adipiscing elit
								</Text>
							</S.Banner>
						</Link>
					</SwiperSlide>

					{oilsProductsCards}
				</Swiper>
			</S.Carousel>
		</S.ProductsOilsSection>
	);
};
