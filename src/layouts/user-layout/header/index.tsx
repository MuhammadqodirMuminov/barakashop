import { HeaderBottom, HeaderTop } from '@/components';
import { useTypedSelector } from '@/hooks';
import { ICategoryState } from '@/store/category/interface';
import * as S from './styled';

export const Header = () => {
	const { categories } = useTypedSelector(state => state.category);

	return (
		<S.Header>
			<HeaderTop nav={categories as ICategoryState[]} />
			<HeaderBottom nav={categories as ICategoryState[]} />
		</S.Header>
	);
};
