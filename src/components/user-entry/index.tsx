import { UserIcon } from '@/assets';
import { Link } from 'react-router-dom';
import * as S from './styled';

export const UserEntry = () => {
	return (
		<S.UserEntry>
			<img src={UserIcon} alt='user' />

			<Link to={'/sign-in'}>
				<span>Login</span>
			</Link>
		</S.UserEntry>
	);
};
