import { SwiperProps } from "swiper/react";

export interface SliderProps extends SwiperProps {
    items: JSX.Element[]
    buttons?: boolean;
}