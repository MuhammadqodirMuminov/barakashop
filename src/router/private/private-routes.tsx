import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { IRoutesProps } from '../type';

export const ProtectedRoutes = ({ isAuth }: IRoutesProps) => (isAuth ? <Outlet /> : <Navigate to={ROUTES.signIn} />);
