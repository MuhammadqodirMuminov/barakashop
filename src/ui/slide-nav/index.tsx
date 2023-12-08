import { RefObject } from 'react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import * as S from './styled';

type Ref = ((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null | undefined;

interface SlideNavProps {
	prevRef: Ref;
	nextRef: Ref;
}

export const SlideNav = ({ prevRef, nextRef }: SlideNavProps) => {
	return (
		<>
			<S.SlidePrevButton ref={prevRef}>
				<ArrowForwardIcon />
			</S.SlidePrevButton>

			<S.SlideNextButton ref={nextRef}>
				<ArrowForwardIcon />
			</S.SlideNextButton>
		</>
	);
};
