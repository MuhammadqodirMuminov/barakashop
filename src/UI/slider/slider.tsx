import rightArrowIcon from '@/assets/icons/arrows/right.svg';
import { Image } from '@chakra-ui/react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CustomButton } from '../button/button';
import { SliderProps } from './slider.props';
import style from './style.module.css';

export const Slider = (props: SliderProps) => {
	return (
		<Swiper
			{...props}
			className={style.swiper}
			navigation={{
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}}
		>
			{props.items.map((item, index) => (
				<SwiperSlide key={index}>{item}</SwiperSlide>
			))}
			{/* Navigation buttons (previous & next) */}
			{props.buttons ? (
				<>
					<CustomButton className={`swiper-button-prev ${style.leftButton}`} image={<Image className={style.leftArrow} src={rightArrowIcon} />} />
					<CustomButton className={`swiper-button-next ${style.rightButton}`} image={<Image src={rightArrowIcon} />} />
				</>
			) : (
				''
			)}
		</Swiper>
	);
};
