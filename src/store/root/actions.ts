import * as AdsActions from '../ads/actions';
import { AdsSliceActions } from '../ads/slice';
import * as AuthActions from '../auth/actions';
import { AuthSliceActions } from '../auth/slice';
import * as CategoryAction from '../category/actions';
import { CategorySliceActions } from '../category/slices';
import * as ProductActions from '../product/actions';
import { ProductSliceActions } from '../product/slice';
import * as OqimActions from '../oqim/actions';
import { OqimSliceActions } from '../oqim/slice';

export const AllActions = {
    ...AuthSliceActions,
    ...AuthActions,
    ...CategorySliceActions,
    ...CategoryAction,
    ...ProductActions,
    ...ProductSliceActions,
    ...AdsActions,
    ...AdsSliceActions,
    ...OqimActions,
    ...OqimSliceActions,
};
