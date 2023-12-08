import { Wrapper, media } from '@/styled';
import styled from '@emotion/styled';
export { Wrapper };

export const Main = styled.main``;

export const Top = styled.div`
	padding: 30px 0 40px;
`;

export const Sections = styled.div`
	padding: 60px 0;
	background: #fff;

	${media.laptop} {
		padding: 40px 0;
	}
`;
