import { CustomButton, CustomText } from '@/ui';
import { Box, Image } from '@chakra-ui/react';
import rightArrowIcon from '@/assets/icons/arrows/blue-arrow.svg';
import { Link } from 'react-router-dom';
import { SectionTitleProps } from './section-title-props';

export const SectionTitle = ({ title, link, link_title }: SectionTitleProps) => {
	return (
		<Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} fontWeight={'bold'}>
			<CustomText
				fontSize={{
					base: 12,
					sm: 15,
					md: 18,
					lg: 20,
					xl: 22,
				}}
			>
				{title}
			</CustomText>
			<Link to={link}>
				<CustomButton
					p={{
						base: 2,
						sm: 5,
						md: 6,
					}}
					color={'#1976d2'}
					text={link_title ? link_title : title}
					fontSize={{
						base: 10,
						sm: 12,
						md: 14,
						lg: 16,
						xl: 18,
					}}
					image={<Image ml={5} src={rightArrowIcon} />}
				/>
			</Link>
		</Box>
	);
};
