import { ShoppingCartIcon } from '@/assets';
import { Link } from 'react-router-dom';
import * as S from './link-styled';

export const ShoppingCartLink = () => {
	return (
		<Link to={'/'}>
			<S.ShoppingCartLink>
				<img src={ShoppingCartIcon} alt='shoppingc cart' />
				<span>Basket</span>
				<S.ShoppingCartItemsCount>0</S.ShoppingCartItemsCount>
			</S.ShoppingCartLink>
		</Link>
	);
};
