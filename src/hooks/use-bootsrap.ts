import { useEffect, useState } from 'react';
import { getFromLocalstorage, getTokens } from '../helpers';
import { addNotification } from '../utils';
import { useActions } from './use-actions';

export function useBootstrap() {
	const { setAuth, setToken, logout, setUser } = useActions();
	// const { isAuth } = useTypedSelector(state => state.auth);
	const [isInitiated, setIsInitiated] = useState(true);
	const isAuth = true;

	const user = getFromLocalstorage('user');
	const accessToken = getTokens().accessToken;

	const setApp = () => {
		if (accessToken != undefined) {
			setUser(JSON.parse(user as string));
			setAuth(true);
			setToken(accessToken);
		} else {
			logout();
		}
	};

	useEffect(() => {
		const appConfig = () => {
			try {
				setApp();
				setIsInitiated(false);
			} catch (error) {
				addNotification(error);
			}
		};

		appConfig();
	}, []);

	return { isAuth, isInitiated };
}
