import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../header';
export const PageLayout: FC<PropsWithChildren> = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};
