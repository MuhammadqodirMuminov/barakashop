import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SliderProps } from './slider.props';
import { CustomButton } from '../button/button';
import rightArrowIcon from '@public/icons/arrows/right.svg';
import style from './style.module.css';
import { Image } from '@chakra-ui/react';

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
                    <CustomButton
                        className={`swiper-button-prev ${style.leftButton}`}
                        image={
                            <Image
                                className={style.leftArrow}
                                src={rightArrowIcon}
                            />
                        }
                    />
                    <CustomButton
                        className={`swiper-button-next ${style.rightButton}`}
                        image={<Image src={rightArrowIcon} />}
                    />
                </>
            ) : (
                ''
            )}
        </Swiper>
    );
};
