import { AdsReducer } from '../ads/slice';
import { AuthReducer } from '../auth/slice';
import { CategoryReducer } from '../category/slices';
import { ProductReducer } from '../product/slice';

export const reducer = {
    ads: AdsReducer,
    auth: AuthReducer,
    category: CategoryReducer,
    product: ProductReducer,
};
