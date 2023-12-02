import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';
import { Router } from '../router';
import { history } from '../utils';
import { HistoryRouter } from './history-router';

import { Global } from '@emotion/react';
import { globalStyles, muiTheme } from '../styled';

export function App() {
	return (
		<MuiThemeProvider theme={muiTheme}>
			<HistoryRouter history={history}>
				<Global styles={globalStyles} />
				<Router />
				<Toaster />
			</HistoryRouter>
		</MuiThemeProvider>
	);
}
