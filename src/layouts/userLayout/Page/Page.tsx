import { FC, PropsWithChildren } from 'react';

import { Footer } from '../Footer/Footer.styled';
import { Header } from '../Header/Header.styled';
import * as S from './Page.styled';

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<S.PageLayout>
			<Header />

			<S.Wrapper as='main'>
				<S.Content>{children}</S.Content>
			</S.Wrapper>

			<Footer />
		</S.PageLayout>
	);
};
