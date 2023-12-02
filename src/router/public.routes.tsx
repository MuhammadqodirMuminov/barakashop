import { Navigate, Outlet } from 'react-router-dom';
import { Content } from '../components';
import { ROUTES } from '../constants';
import { IRoutesProps } from './router.props';

export const PublicRoutes = ({ isAuth }: IRoutesProps) =>
	isAuth ? (
		<Navigate to={ROUTES.home} />
	) : (
		<Content>
			<Outlet />
		</Content>
	);
