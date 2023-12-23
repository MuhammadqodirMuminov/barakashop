import { ShoppingCartIcon, UserIcon, logo, logoMobile } from '@/assets';
import { Link } from 'react-router-dom';
import { HamburgerMenu, LocationChoose, Phone, SparePartSearch, UserEntry } from '..';
import { NavItem } from '../../layouts/user-layout/header/types';
import * as S from './styled';

interface HeaderTopProps {
	nav: NavItem[];
}

export const HeaderTop = ({ nav }: HeaderTopProps) => {
	return (
		<S.HeaderTop>
			<S.TopWrapper>
				<HamburgerMenu nav={nav} />

				<S.Logo>
					<Link to={'/'}>
						<a>
							<S.LogoImg>
								<img src={logo} alt='' />
							</S.LogoImg>

							<S.LogoImgMobile>
								<img src={logoMobile} alt='' />
							</S.LogoImgMobile>
						</a>
					</Link>
				</S.Logo>

				<SparePartSearch />

				<S.TopRight>
					<LocationChoose />

					<Phone />

					<Link to={'/'}>
						<S.ShoppingCartLinkMobile>
							<img src={ShoppingCartIcon} alt='' />

							<S.ShoppingCartItemsCount>{2}</S.ShoppingCartItemsCount>
						</S.ShoppingCartLinkMobile>
					</Link>

					<UserEntry />

					<S.UserEntryMobile>
						<Link to={'/sign-in'}>
							<img src={UserIcon} alt='' />
						</Link>
					</S.UserEntryMobile>
				</S.TopRight>
			</S.TopWrapper>
		</S.HeaderTop>
	);
};
