import UserIcon from 'public/icons/user.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../../constants';
import * as S from './UserEntry.styled';
export const UserEntry = () => {
	return (
		<S.UserEntry>
			<UserIcon />
			<Link to={ROUTES.signIn}>
				<span>Login</span>
			</Link>
		</S.UserEntry>
	);
};
