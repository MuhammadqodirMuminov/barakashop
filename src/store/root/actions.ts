import * as AuthActions from '../auth/actions';
import { AuthSliceActions } from '../auth/slice';
import * as CategoryAction from '../category/actions';
import { CategorySliceActions } from '../category/slices';
import * as ProductActions from '../product/actions';
import { ProductSliceActions } from '../product/slice';

export const AllActions = {
    ...AuthSliceActions,
    ...AuthActions,
    ...CategorySliceActions,
    ...CategoryAction,
    ...ProductActions,
    ...ProductSliceActions,
};
