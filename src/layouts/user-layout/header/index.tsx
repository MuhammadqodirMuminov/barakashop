import { HeaderBottom, HeaderTop } from '@/components';
import { nav } from '@/constants';
import * as S from './styled';

export const Header = () => {
	
	return (
		<S.Header>
			<HeaderTop nav={nav} />
			<HeaderBottom nav={nav} />
		</S.Header>
	);
};
