import { DetailImg } from '@/assets';
import { useRef } from 'react';
import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideNav } from '../ads';
import './detail.swiper.css';
import { BASE_URL } from '@/constants';

export const DetailSlider = ({images}) => {

	console.log(images);
	

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
			{images?.urls?.map(item => <><SwiperSlide>
				<img key={item} src={`${BASE_URL}/uploads/${item}`} />
			</SwiperSlide></>)}
		
			<SlideNav prevRef={prevRef} nextRef={nextRef} />
		</Swiper>
	);
};
