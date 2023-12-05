import * as AuthActions from '../auth/actions';
import { AuthSliceActions } from '../auth/slice';

export const AllActions = {
	...AuthSliceActions,
	...AuthActions,
};
