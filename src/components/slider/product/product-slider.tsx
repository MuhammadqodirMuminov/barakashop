import { CustomButton, ProductCard } from '@/ui';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductSliderProps } from './product-slider-props';
import { Image } from '@chakra-ui/react';
import rightArrowIcon from '@/assets/icons/arrows/right.svg';
import { Navigation } from 'swiper/modules';

export const ProductSlider = (props: ProductSliderProps) => {
    return (
        <Swiper
            style={{ position: 'relative' }}
            watchOverflow={true}
            slidesPerView={'auto'}
            spaceBetween={10}
            breakpoints={{
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                950: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
            }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
        >
            {props.items.map((item) => (
                <SwiperSlide key={item.id}>
                    <ProductCard product={item} />
                </SwiperSlide>
            ))}
            <CustomButton
                position={'absolute'}
                top={'49%'}
                left={'0%'}
                bottom={0}
                zIndex={10}
                p={0}
                className={`swiper-button-prev`}
                image={
                    <Image
                        style={{ rotate: '180deg' }}
                        src={rightArrowIcon}
                    />
                }
            />
            <CustomButton
                position={'absolute'}
                top={'49%'}
                left={'calc(100% - 3%)'}
                zIndex={10}
                p={0}
                className={`swiper-button-next`}
                image={<Image src={rightArrowIcon} />}
            />
        </Swiper>
    );
};
