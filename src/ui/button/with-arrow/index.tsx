import { ArrowRightIcon } from '@/assets';
import { ButtonWithArrowProps } from './styled';

import * as S from './styled';

export const ButtonWithArrow = ({ color = 'primary', ...props }: Partial<ButtonWithArrowProps>) => {
	return <S.ButtonWithArrow {...props} color={color} endIcon={<ArrowRightIcon />} />;
};
