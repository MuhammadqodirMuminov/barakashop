import { Loading } from '../UI';
import { useBootstrap } from '../hooks';
import { Routes } from './router';

export const Router = () => {
	const { isAuth, isInitiated } = useBootstrap();

	if (isInitiated) {
		return <Loading />;
	}

	return <Routes isAuth={true} />;
};
