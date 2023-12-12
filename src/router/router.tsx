import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { ROUTES } from '../constants';
import { PageLayout, SellerLayout } from '../layouts';
import { Loading } from '../ui';
import {
    CaregoryPage,
    DetailPage,
    Home,
    SearchResult,
    SellerHome,
    SignIn,
    SellerOqim,
    SellerProfile,
    SellerProfileChangePhone,
    SellerProfileChangePassword,
    SellerProfileEditSeller,
} from './loadable/loadible';
import { ProtectedRoutes } from './private/private-routes';
import { PublicRoutes } from './public/public-routes';
import { IRoutesProps } from './type';

export const Routes = ({ isAuth }: IRoutesProps) =>
    useRoutes([
        {
            element: <ProtectedRoutes isAuth={isAuth} />,
            children: [
                {
                    path: ROUTES.home,
                    element: <PageLayout />,
                    children: [
                        {
                            path: ROUTES.home,
                            element: (
                                <Suspense fallback={<Loading />}>
                                    <Home />
                                </Suspense>
                            ),
                        },
                        {
                            path: ROUTES.category,
                            element: (
                                <Suspense fallback={<Loading />}>
                                    <CaregoryPage />
                                </Suspense>
                            ),
                        },
                        {
                            path: ROUTES.detail,
                            element: (
                                <Suspense fallback={<Loading />}>
                                    <DetailPage />
                                </Suspense>
                            ),
                        },
                        {
                            path: ROUTES.searchResult,
                            element: (
                                <Suspense fallback={<Loading />}>
                                    <SearchResult />
                                </Suspense>
                            ),
                        },
                    ],
                },
                {
                    path: ROUTES.seller,
                    element: <SellerLayout />,
                    children: [
                        {
                            path: ROUTES.seller,
                            element: (
                                <Suspense fallback={<Loading />}>
                                    <SellerHome />
                                </Suspense>
                            ),
                        },
                        {
                            path: ROUTES.sellerOqim,
                            element: (
                                <Suspense fallback={<Loading />}>
                                    <SellerOqim />
                                </Suspense>
                            ),
                        },
                        {
                            path: ROUTES.sellerProfile,
                            element: (
                                <Suspense fallback={<Loading />}>
                                    <SellerProfile />
                                </Suspense>
                            ),
                            children: [
								{
									index: true,
                                    path: ROUTES.sellerProfile,
                                    element: (
                                        <Suspense fallback={<Loading />}>
                                            <SellerProfileEditSeller />
                                        </Suspense>
                                    ),
                                },
                                {
                                    path: ROUTES.sellerProfileEditSeller,
                                    element: (
                                        <Suspense fallback={<Loading />}>
                                            <SellerProfileEditSeller />
                                        </Suspense>
                                    ),
                                },
                                {
                                    path: ROUTES.sellerProfileChangePhone,
                                    element: (
                                        <Suspense fallback={<Loading />}>
                                            <SellerProfileChangePhone />
                                        </Suspense>
                                    ),
                                },
                                {
                                    path: ROUTES.sellerProfileChangePassword,
                                    element: (
                                        <Suspense fallback={<Loading />}>
                                            <SellerProfileChangePassword />
                                        </Suspense>
                                    ),
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            element: <PublicRoutes isAuth={isAuth} />,
            children: [
                {
                    path: ROUTES.signIn,
                    element: (
                        <Suspense fallback={<Loading />}>
                            <SignIn />
                        </Suspense>
                    ),
                },
            ],
        },
    ]);
