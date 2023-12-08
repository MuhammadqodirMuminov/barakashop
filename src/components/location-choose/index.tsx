import { LocationIcon } from '@/assets';
import * as S from './styled';

export const LocationChoose = () => {
	const city = 'Tashkent';

	return (
		<S.LocationChoose>
			<S.CurrentLocation>
				<img src={LocationIcon} alt='' />

				<span>{city}</span>
			</S.CurrentLocation>
		</S.LocationChoose>
	);
};
