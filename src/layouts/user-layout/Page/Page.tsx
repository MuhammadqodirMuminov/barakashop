import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../footer/footer';
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
