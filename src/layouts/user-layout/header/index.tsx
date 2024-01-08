import { HeaderBottom, HeaderTop } from '@/components';
import { useTypedSelector } from '@/hooks';
import { ICategory } from '@/types';
import * as S from './styled';

export const Header = () => {
	const { categories } = useTypedSelector(state => state.category);

	return (
		<S.Header>
			<HeaderTop nav={categories as ICategory[]} />
			<HeaderBottom nav={categories as ICategory[]} />
		</S.Header>
	);
};
