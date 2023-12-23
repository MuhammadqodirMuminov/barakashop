import { Navigate, Outlet } from 'react-router-dom';
import { Content } from '../../components';
import { ROUTES } from '../../constants';
import { IRoutesProps } from '../type';

export const PublicRoutes = ({ isAuth }: IRoutesProps) =>
	isAuth ? (
		<Navigate to={ROUTES.seller} />
	) : (
		<Content>
			<Outlet />
		</Content>
	);
