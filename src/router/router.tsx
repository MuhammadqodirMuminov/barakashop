import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { Loading } from '../UI';
import { ROUTES } from '../constants';
import { PageLayout, SellerLayout } from '../layouts';
import { CaregoryPage, DetailPage, SearchResult, SellerHome } from './loadible';
import { ProtectedRoutes } from './protected.routes';
import { PublicRoutes } from './public.routes';
import { IRoutesProps } from './router.props';

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
							path: ROUTES.sellerHome,
							element: (
								<Suspense fallback={<Loading />}>
									<SellerHome />
								</Suspense>
							),
						},
					],
				},
			],
		},
		{ element: <PublicRoutes isAuth={isAuth} />, children: [] },
	]);
