import { SwiperProps } from "swiper/react";

export interface AdsSliderProps extends SwiperProps {
    items: IAdsItem[]
}

export interface IAdsItem {
    title: string;
    image: string;
    description: string;
}