import rightArrowIcon from '@/assets/icons/arrows/right.svg';
import thumbImage from '@/assets/img/ads-thumb.png';
import placeholderImage from '@/assets/img/placeholders/product.png';
import { Box, Image } from '@chakra-ui/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CustomButton, CustomText } from '../../../ui';
import { AdsSliderProps } from './ads-slider-props';
import style from './ads.module.css';

export const AdsSlider = (props: AdsSliderProps) => {
    return (
        <Swiper
            {...props}
            className={style.swiper}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
        >
            {props.items.map((item, index) => (
                <SwiperSlide key={index}>
                    <Box className={style.adsBox}>
                        <img
                            className={style.image}
                            src={thumbImage}
                        />
                        <div>
                            <CustomText className={style.title}>
                                {item.title}
                            </CustomText>
                            <CustomText className={style.description}>
                                {item.description}
                            </CustomText>
                        </div>
                        <img
                            className={style.adsImage}
                            src={item.image ? item.image : placeholderImage}
                        />
                    </Box>
                </SwiperSlide>
            ))}
            {/* Navigation buttons (previous & next) */}

            <CustomButton
                p={0}
                className={`swiper-button-prev ${style.leftButton}`}
                image={
                    <Image
                        className={style.leftArrow}
                        src={rightArrowIcon}
                    />
                }
            />
            <CustomButton
                p={0}
                className={`swiper-button-next ${style.rightButton}`}
                image={<Image src={rightArrowIcon} />}
            />
        </Swiper>
    );
};
