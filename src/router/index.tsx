import { Loading } from '@/ui';
import { useBootstrap } from '../hooks';
import { Routes } from './router';

export const Router = () => {
	const { isAuth, isInitiated } = useBootstrap();
	console.log(isAuth);

	if (isInitiated) {
		return <Loading />;
	}

	return <Routes isAuth={isAuth} />;
};
