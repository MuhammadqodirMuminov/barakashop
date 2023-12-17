import * as AuthActions from '../auth/actions';
import { AuthSliceActions } from '../auth/slice';
import * as CategoryAction from '../category/actions'
import { CategorySliceActions } from '../category/slices';


export const AllActions = {
	...AuthSliceActions,
	...AuthActions,
	...CategorySliceActions,
	...CategoryAction

};
