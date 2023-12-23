import { useActions } from '@/hooks';
import { addNotification } from '@/utils';
import { FC, PropsWithChildren, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../footer';
import { Header } from '../header';
export const PageLayout: FC<PropsWithChildren> = () => {
	const { getAllCategory } = useActions();

	useEffect(() => {
		getAllCategory({
			callback: () => {
				addNotification('Successfully get ALl categories');
			},
		});
	}, []);

	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};
