import Link from 'next/link'
import Image from 'next/image'

import {LocationChoose} from "../../../../LocationChoose/LocationChoose";
import { Skeleton } from 'ui'
import { SparePartSearch, HamburgerMenu, Phone, UserEntry } from '..'
// import { useAuth } from 'hooks'
import { NavItem } from '../../Header.types'
import { getRoleHomeRoutePath } from 'utils'

import * as S from './Top.styled'

import logo from 'public/img/logo/logo.png'
import logoMobile from 'public/img/logo/logo-mobile.png'

import UserIcon from 'public/icons/user.svg'
import ShoppingCartIcon from 'public/icons/shopping-cart.svg'
import BellIcon from 'public/icons/bell.svg'
import { ROUTE_NAMES } from 'routes/routes';

interface HeaderTopProps {
  nav: NavItem[]
}

export const HeaderTop = ({ nav }: HeaderTopProps) => {
  // const { isAuth, isAccountLoading, user } = useAuth()

  // const role = user?.role?.title
  const shoppingCartItemsCount = 5

  return (
    <S.HeaderTop>
      <S.TopWrapper>
        <HamburgerMenu nav={nav} />

        <S.Logo>
          <Link href={ROUTE_NAMES.MAIN}>
            <a>
              <S.LogoImg>
                <Image src={logo} layout="fill" alt="oner" priority quality={100} />
              </S.LogoImg>

              <S.LogoImgMobile>
                <Image src={logoMobile} layout="fill" alt="oner" priority quality={100} />
              </S.LogoImgMobile>
            </a>
          </Link>
        </S.Logo>

        <SparePartSearch />

        <S.TopRight>
          <LocationChoose />

          <Phone />

        

          <Link href={ROUTE_NAMES.SIGN_IN} passHref>
            <S.ShoppingCartLinkMobile>
              <ShoppingCartIcon />

              <S.ShoppingCartItemsCount>{shoppingCartItemsCount}</S.ShoppingCartItemsCount>
            </S.ShoppingCartLinkMobile>
          </Link>

          <UserEntry />

         
        </S.TopRight>
      </S.TopWrapper>
    </S.HeaderTop>
  )
}
