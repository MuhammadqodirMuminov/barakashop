import { media } from '@/styled';
import styled from '@emotion/styled';

export const Main = styled.main``;

export const Top = styled.div`
	padding: 30px 0 40px;
`;

export const Sections = styled.div`
	background: #fff;

	${media.laptop} {
		padding: 40px 0;
	}
`;

export const WrapperSlide = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1240px;
	width: 100%;
	margin: 0 auto;

	${media.createMedia(666)} {
		padding: 0 15px;
	}
`;
