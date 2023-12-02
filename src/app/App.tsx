import { Toaster } from 'react-hot-toast';
import { Router } from '../router';
import { GlobalStyles } from '../styles';
import { history } from '../utils';
import { HistoryRouter } from './history-router';

export function App() {
	return (
		<HistoryRouter history={history}>
			<GlobalStyles />
			<Router />
			<Toaster />
		</HistoryRouter>
	);
}
