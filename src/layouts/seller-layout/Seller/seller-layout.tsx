import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export const SellerLayout: FC = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};
