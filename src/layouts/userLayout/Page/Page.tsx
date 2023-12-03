import { FC, PropsWithChildren } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<div>{children}</div>
			<Footer />
		</>
	);
};
