import { AuthReducer } from '../auth/slice';
import { CategoryReducer } from '../category/slices';

export const reducer = {
	auth: AuthReducer,
	category: CategoryReducer
};
