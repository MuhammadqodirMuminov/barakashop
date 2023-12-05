<<<<<<< HEAD
=======
import basketIcon from '@/assets/icons/shopping-cart.svg';
>>>>>>> 383bd79cfccc3e7d359520df002bf3fc4c06bdbc
import noThumbnailImage from '@/assets/img/no-thumbnail.png';
import { Card, CardBody, CardHeader } from '@chakra-ui/card';
import { Image } from '@chakra-ui/image';
import { Box, Text } from '@chakra-ui/layout';
<<<<<<< HEAD
import { BASE_URL } from '../../constants/site.constants';
import { ProductCardProps } from './card.props';

import basketIcon from '@/assets/icons/shopping-cart.svg';

=======
import { BASE_URL } from '../../constants/site-constants';
>>>>>>> 383bd79cfccc3e7d359520df002bf3fc4c06bdbc
import { CustomButton } from '../button/button';
import { ratingImageGenerate } from '../rating/rating';
import { ProductCardProps } from './card.props';

export const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
	const { id, title, images, rating, product_price } = product;
	const thumbImage = images?.urls[0];
	const ratingImages = ratingImageGenerate(Number(rating));
	const customPrice = product_price ? product_price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ') : product_price;

	return (
<<<<<<< HEAD
		<Card w={300}>
=======
		<Card w={300} _activeLink={`/product/${id}`}>
>>>>>>> 383bd79cfccc3e7d359520df002bf3fc4c06bdbc
			<CardHeader p={0}>
				<Image h={252} src={thumbImage ? `${BASE_URL}/${thumbImage}` : noThumbnailImage} objectFit={'cover'} />
			</CardHeader>

			<CardBody p={'20px'}>
				<Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
					<Text color={'grey'} mr={5} fontSize={'small'}>
						Article: {id}
					</Text>
					<Box display={'flex'}>
						{ratingImages}

						<Text display={'block'} ml={2} color={'grey'}>
							{Number.parseFloat(rating).toFixed(1)}
						</Text>
					</Box>
				</Box>
				<Text m={0} mt={2} fontSize={'16px'}>
					{title}
				</Text>
				<Box display={'flex'} justifyContent={'space-between'} mt={2}>
					<Text display={'flex'} alignItems={'center'} m={0} fontSize={'30px'}>
						{customPrice}
						<Text fontSize={16} ml={2}>
							{' '}
							s'om
						</Text>
					</Text>
					<CustomButton p={2} border={'2px solid #023581'} bg={'white'} image={<Image color={'#023581'} src={basketIcon} />} />
				</Box>
			</CardBody>
		</Card>
	);
};
