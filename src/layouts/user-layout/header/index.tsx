import { HeaderBottom, HeaderTop } from '@/components';
import { nav } from '@/constants';
import * as S from './styled';
import { useTypedSelector } from '@/hooks';

export const Header = () => {
	const { categories } = useTypedSelector(state => state.category);

	
	return (
		<S.Header>
			<HeaderTop nav={categories} />
			<HeaderBottom  nav={categories} />
		</S.Header>
	);
};
