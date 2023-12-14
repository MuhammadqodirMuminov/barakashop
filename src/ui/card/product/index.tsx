import noThumbnailImage from '@/assets/img/no-thumbnail.png';
import { numberToPrice } from '@/utils';
import { Link } from 'react-router-dom';
import { BasketButton } from '../..';
import { BASE_URL } from '../../../constants/site-constants';
// import { ratingImageGenerate } from '../rating/rating';
import { ProductCardProps } from './props';
import * as S from './styled';

export const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
	const { id, title, images } = product;
	// const thumbImage = images?.urls[0];
	// const ratingImages = ratingImageGenerate(Number(rating));
	// const customPrice = product_price ? product_price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ') : product_price;

	return (
		<S.ProductCard>
			<Link to={`/product-detail/${id}`}>
				<S.Img src={images?.urls[0] ? BASE_URL + '/uploads/' + images?.urls[0] : noThumbnailImage} alt={title} />
				<S.Info>
					<S.InfoTop>
						<S.ProductCode>
							<span>Article:</span>
							<span>{id}</span>
						</S.ProductCode>

						<S.RatingComments>
							<S.Rating>{2}</S.Rating>
							<S.CommentsNumber>({3})</S.CommentsNumber>
						</S.RatingComments>
					</S.InfoTop>

					<S.Name>{title}</S.Name>

					<S.InfoBottom>
						<S.Price>
							<S.PriceNew>{numberToPrice(3)}</S.PriceNew>
							<S.PriceOld>{numberToPrice(3)}</S.PriceOld>
						</S.Price>
						<BasketButton />
					</S.InfoBottom>
				</S.Info>
			</Link>
		</S.ProductCard>
	);
};
