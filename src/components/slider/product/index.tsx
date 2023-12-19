import { CustomButton, ProductCard } from '@/ui';
import { SlideNav } from '@/ui/slide-nav';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Skeleton, Text } from '@chakra-ui/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductSliderProps } from './props';
import * as S from './styled';

export const ProductSlider = (props: ProductSliderProps) => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const loading = false;

	return (
		<S.ProductsCarousel>
			<S.Top>
				<Skeleton height={'24px'} isLoaded={loading}>
					<Text fontSize={{ sm: 22, md: 24, lg: 28 }} fontStyle={'normal'} fontWeight={'bolder'} variant='h1'>
						{props.title}
					</Text>
				</Skeleton>

				<Skeleton height={'24px'} isLoaded={loading}>
					<Link to='/'>
						<CustomButton text='See all' image={<ArrowForwardIcon />} gap={2} />
					</Link>
				</Skeleton>
			</S.Top>
			<S.Carousel>
				<Swiper
					slidesPerView='auto'
					spaceBetween={20}
					modules={[Navigation]}
					breakpoints={{
						1200: {
							slidesPerView: 4,
							spaceBetween: 20,
						},
					}}
					onInit={({ params, navigation }) => {
						// @ts-ignore
						params.navigation.prevEl = prevRef.current;
						// @ts-ignore
						params.navigation.nextEl = nextRef.current;
						navigation.init();
						navigation.update();
					}}
				>
					{props.items.map(item => (
						<SwiperSlide key={item.id}>
							<ProductCard product={item} />
						</SwiperSlide>
					))}
					<SlideNav prevRef={prevRef} nextRef={nextRef} />
				</Swiper>
			</S.Carousel>
		</S.ProductsCarousel>
	);
};
