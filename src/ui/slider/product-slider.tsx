import { ProductSliderProps } from './product-slider-props';
import { ProductCard } from '@/ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const ProductSlider = (props: ProductSliderProps) => {

    return (
        <Swiper
            watchOverflow={true}
            slidesPerView='auto'
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
            
        >
            {props.items.map((item) => (
                <SwiperSlide key={item.id}>
                    <ProductCard product={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
