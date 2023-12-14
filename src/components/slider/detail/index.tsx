import { DetailImg } from '@/assets';
import { useRef } from 'react';
import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideNav } from '../ads';
import './detail.swiper.css';

export const DetailSlider = () => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	return (
		<Swiper
			spaceBetween={10}
			navigation={true}
			modules={[FreeMode, Navigation]}
			className='mySwiper2'
			onInit={({ params, navigation }) => {
				// @ts-ignore
				params.navigation.prevEl = prevRef.current;
				// @ts-ignore
				params.navigation.nextEl = nextRef.current;
				navigation.init();
				navigation.update();
			}}
		>
			<SwiperSlide>
				<img src={DetailImg} />
			</SwiperSlide>
			<SwiperSlide>
				<img src='https://swiperjs.com/demos/images/nature-2.jpg' />
			</SwiperSlide>
			<SwiperSlide>
				<img src='https://swiperjs.com/demos/images/nature-3.jpg' />
			</SwiperSlide>
			<SwiperSlide>
				<img src='https://swiperjs.com/demos/images/nature-4.jpg' />
			</SwiperSlide>
			<SlideNav prevRef={prevRef} nextRef={nextRef} />
		</Swiper>
	);
};
