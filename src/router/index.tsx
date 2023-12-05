import { useBootstrap } from '../hooks';
import { Loading } from '../ui';
import { Routes } from './router';

export const Router = () => {
	const { isAuth, isInitiated } = useBootstrap();

	if (isInitiated) {
		return <Loading />;
	}

	return <Routes isAuth={isAuth} />;
};
