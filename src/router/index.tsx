import { Loaging } from '../UI';
import { useBootstrap } from '../hooks';
import { Routes } from './router';

export const Router = () => {
	const { isAuth, isInitiated } = useBootstrap();

	if (isInitiated) {
		return <Loaging />;
	}

	return <Routes isAuth={isAuth} />;
};
