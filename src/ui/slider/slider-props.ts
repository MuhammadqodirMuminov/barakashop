import { SwiperProps } from "swiper/react";

export interface SliderProps extends SwiperProps {
    items: IAdsItem[]
    buttons?: boolean;
}

export interface IAdsItem {
    title: string;
    image: string;
    description: string;
}