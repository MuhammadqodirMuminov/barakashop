import { CategoryCard } from '@/ui';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CategorySliderProps } from './category-slider-props';

export const CategorySlider = (props: CategorySliderProps) => {
	return (
		<Swiper
			slidesPerView='auto'
			spaceBetween={10}
			breakpoints={{
				1200: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
			}}
		>
			{props.items.map(item => (
				<SwiperSlide key={item.id}>
					<CategoryCard category={item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
