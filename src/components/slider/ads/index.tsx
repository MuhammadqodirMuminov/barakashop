import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as S from './styled';

import { productImg } from '@/assets';
import { SliderMaskTabletBg, SliderMuskBg, SliderMuskMobileBg } from '@/ui';
import { SlideNav } from '@/ui/slide-nav';
import { Heading, Image, Skeleton, Text } from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper/modules';
import { MainSliderProps } from './props';
import { IAds } from '@/types';
import { useTypedSelector } from '@/hooks';

export { SlideNav };

export const MainSlider = ({ ads }: MainSliderProps) => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const loading = !useTypedSelector(state => state.ads.loading.getAll);

	return (
		<S.MainSlider>
			<Swiper
				modules={[Navigation, Pagination]}
				loop
				pagination
				slidesPerView={1}
				spaceBetween={20}
				onInit={({ params, navigation }) => {
					// @ts-ignore
					params.navigation.prevEl = prevRef.current;
					// @ts-ignore
					params.navigation.nextEl = nextRef.current;
					navigation.init();
					navigation.update();
				}}
			>
				{ads?.map((item: IAds, i: any) => (
					<SwiperSlide key={i}>
						<Skeleton isLoaded={loading} borderRadius={'20px'}>
							<S.Slide>
								<S.SlideLeft>
									<Heading variant='h1' fontSize={{ sm: 28, md: 32, xl: 36 }}>
										{item.ads_title}
										<S.Discount>{item.ads_persent}%</S.Discount>
									</Heading>

									<Text fontSize={{ sm: 13, md: 20, }} variant='h4'>
										{item.ads_description}
									</Text>
								</S.SlideLeft>

								<S.SlideImg>
									<Image src={productImg} alt='product' />
								</S.SlideImg>

								<S.BackgroundDesk>
									<SliderMuskBg />
								</S.BackgroundDesk>

								<S.BackgroundTablet>
									<SliderMaskTabletBg />
								</S.BackgroundTablet>

								<S.BackgroundMobile>
									<SliderMuskMobileBg />
								</S.BackgroundMobile>
							</S.Slide>
						</Skeleton>
					</SwiperSlide>
				))}

				<SlideNav prevRef={prevRef} nextRef={nextRef} />
			</Swiper>
		</S.MainSlider>
	);
};
