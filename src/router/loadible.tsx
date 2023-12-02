import loadable from '@loadable/component';
import { Loaging } from '../UI';
const handleCatchChunkError = () => {
	return { default: Loaging };
};

export const Home = loadable(() => import('../pages').then(({ Home }) => ({ default: Home })).catch(handleCatchChunkError), { fallback: <Loaging /> });
