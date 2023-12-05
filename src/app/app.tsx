import { Router } from '@/router';
import { store } from '@/store/store';
import { GlobalStyles } from '@/styles';
import { ChakraProvider } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { history } from '../utils';
import { HistoryRouter } from './history-router';

export function App() {
	return (
		<ChakraProvider>
			<HistoryRouter history={history}>
				<Provider store={store}>
					<GlobalStyles />
					<Router />
					<Toaster />
				</Provider>
			</HistoryRouter>
		</ChakraProvider>
	);
}
