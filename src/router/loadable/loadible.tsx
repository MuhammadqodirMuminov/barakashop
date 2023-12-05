import loadable from '@loadable/component';
import { Loading } from '../../ui';
const handleCatchChunkError = () => {
	return { default: Loading };
};

export const Home = loadable(() => import('../../pages').then(({ Home }) => ({ default: Home })).catch(handleCatchChunkError), { fallback: <Loading /> });

export const CaregoryPage = loadable(() => import('../../pages').then(({ CaregoryPage }) => ({ default: CaregoryPage })).catch(handleCatchChunkError), { fallback: <Loading /> });

export const DetailPage = loadable(() => import('../../pages').then(({ DetailPage }) => ({ default: DetailPage })).catch(handleCatchChunkError), { fallback: <Loading /> });

export const SearchResult = loadable(() => import('../../pages').then(({ SearchResult }) => ({ default: SearchResult })).catch(handleCatchChunkError), { fallback: <Loading /> });

export const SellerHome = loadable(() => import('../../pages').then(({ SellerHome }) => ({ default: SellerHome })).catch(handleCatchChunkError), { fallback: <Loading /> });

export const SignIn = loadable(() => import('../../pages').then(({ SignIn }) => ({ default: SignIn })).catch(handleCatchChunkError), { fallback: <Loading /> });
