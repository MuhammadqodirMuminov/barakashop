import { CategoryThumb } from '@/assets';
import { ICategory } from '@/types';
import { CustomButton } from '@/ui';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as S from './styled';

export interface ProductBannersProps {
	titles: string;
	categories: ICategory[];
}

export const ProductsBanners = ({ titles, categories }: ProductBannersProps) => {
	const bannersItems = categories.map(({ id, title, categoty_image }) => {
		return (
			<SwiperSlide key={id}>
				<S.Banner style={{ backgroundImage: `url(${CategoryThumb})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>
					<Text variant='h2' as='h4' fontSize={26} fontWeight={'bolder'}>
						{title}
					</Text>

					<Link to={`/category/${id}`}>
						<CustomButton text='Visit' image={<ArrowForwardIcon />} gap={2} bg={'#033581'} mt={8} color={'white'} />
					</Link>
				</S.Banner>
			</SwiperSlide>
		);
	});

	return (
		<S.ProductsBanners>
			<S.Top>
				<Text fontSize={{ sm: 22, md: 24, lg: 28 }} fontStyle={'normal'} fontWeight={'bolder'} variant='h1'>
					{titles}
				</Text>

				<Link to='/'>
					<CustomButton text='All' image={<ArrowForwardIcon />} gap={2} />
				</Link>
			</S.Top>
			<Swiper
				slidesPerView='auto'
				spaceBetween={20}
				breakpoints={{
					1200: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}}
			>
				{bannersItems}
			</Swiper>
		</S.ProductsBanners>
	);
};
