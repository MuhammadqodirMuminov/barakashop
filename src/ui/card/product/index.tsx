import noThumbnailImage from '@/assets/img/no-thumbnail.png';
import { numberToPrice } from '@/utils';
import { Link } from 'react-router-dom';
import { BasketButton } from '../..';
import { BASE_URL } from '../../../constants/site-constants';
// import { ratingImageGenerate } from '../rating/rating';
import { ProductCardProps } from './props';
import * as S from './styled';
import { Skeleton } from '@chakra-ui/react';
import { useTypedSelector } from '@/hooks';

export const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
	const { id, title, images } = product;
	const loading = false; 
	// const thumbImage = images?.urls[0];
	// const ratingImages = ratingImageGenerate(Number(rating));
	// const customPrice = product_price ? product_price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ') : product_price;

	const loading: boolean = !useTypedSelector(state => state.product.loading.getRecomended);

	return (
		<S.ProductCard>
			<Link to={`/product-detail/${id}`}>
				<Skeleton isLoaded={loading}>
					<S.Img src={images?.urls[0] ? BASE_URL + '/uploads/' + images?.urls[0] : noThumbnailImage} alt={title} />
				</Skeleton>
				<S.Info>
					<S.InfoTop>
						<Skeleton isLoaded={loading}>
							<S.ProductCode>
								<span>Article:</span>
								<span>{id}</span>
							</S.ProductCode>
						</Skeleton>

						<Skeleton isLoaded={loading}>
							<S.RatingComments>
								<S.Rating>{2}</S.Rating>
								<S.CommentsNumber>({3})</S.CommentsNumber>
							</S.RatingComments>
						</Skeleton>
					</S.InfoTop>

					<Skeleton isLoaded={loading}>
						<S.Name>{title}</S.Name>
					</Skeleton>

					<S.InfoBottom>
						<S.Price>
							<Skeleton isLoaded={loading}><S.PriceNew>{numberToPrice(3)}</S.PriceNew></Skeleton>
							<Skeleton isLoaded={loading}><S.PriceOld>{numberToPrice(3)}</S.PriceOld></Skeleton>
						</S.Price>
						<BasketButton />
					</S.InfoBottom>
				</S.Info>
			</Link>
		</S.ProductCard>
	);
};
