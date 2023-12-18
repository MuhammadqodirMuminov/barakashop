import { AuthReducer } from '../auth/slice';
import { CategoryReducer } from '../category/slices';
import { ProductReducer } from '../product/slice';

export const reducer = {
    auth: AuthReducer,
    category: CategoryReducer,
    product: ProductReducer,
};
