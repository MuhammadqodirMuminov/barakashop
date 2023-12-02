import { useRoutes } from 'react-router-dom';
import { ProtectedRoutes } from './protected.routes';
import { PublicRoutes } from './public.routes';
import { IRoutesProps } from './router.props';

export const Routes = ({ isAuth }: IRoutesProps) =>
	useRoutes([
		{
			element: <ProtectedRoutes isAuth={isAuth} />,
			children: [],
		},
		{ element: <PublicRoutes isAuth={isAuth} />, children: [] },
	]);
