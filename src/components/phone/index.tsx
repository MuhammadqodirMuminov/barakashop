import { PhoneIcon } from '@/assets';
import * as S from './styled';

export const Phone = () => {
	return (
		<S.Phone href='tel:998919104910'>
			<img src={PhoneIcon} alt='' />

			<span>+998 (91) 910 49 10</span>
		</S.Phone>
	);
};
