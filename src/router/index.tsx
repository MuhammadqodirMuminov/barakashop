import { Loaging } from '../UI';
import { Routes } from './router';

export const Router = () => {
	const { isAuth, isInitiated } = useBootstrap();

	if (isInitiated) {
		return <Loaging />;
	}

	return <Routes isAuth={true} />;
};
