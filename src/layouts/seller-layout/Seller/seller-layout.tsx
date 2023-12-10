import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';

export const SellerLayout: FC = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};
