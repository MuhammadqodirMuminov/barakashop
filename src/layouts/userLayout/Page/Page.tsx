import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const PageLayout: FC = () => {
	return (
		<>
			<Header />
			<Box>
				<Outlet />
			</Box>
			<Footer />
		</>
	);
};
