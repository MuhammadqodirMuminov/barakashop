import { SparePartSearch, HamburgerMenu, Phone, UserEntry } from "..";

import { NavItem } from "../../Header.types";

import * as S from "./Top.styled";

import logo from "@/assets/img/logo/logo.png";
import logoMobile from "@/assets/img/logo/logo-mobile.png";
import { Link } from "react-router-dom";
import { LocationChoose } from "../LocationChoose/LocationChoose";
import ShoppingCartIcon from '@/assets/icons/shopping-cart.svg'
import UserIcon from '@/assets/icons/user.svg'

interface HeaderTopProps {
  nav: NavItem[];
}

export const HeaderTop = ({ nav }: HeaderTopProps) => {
  return (
    <S.HeaderTop>
      <S.TopWrapper>
        <HamburgerMenu nav={nav} />

        <S.Logo>
          <Link to={"/"}>
            <a>
              <S.LogoImg>
                <img src={logo} alt="" />
              </S.LogoImg>

              <S.LogoImgMobile>
                <img src={logoMobile} alt="" />
              </S.LogoImgMobile>
            </a>
          </Link>
        </S.Logo>

        <SparePartSearch />

        <S.TopRight>
          <LocationChoose />

          <Phone />

          <Link to={"/"}>
            <S.ShoppingCartLinkMobile>
              <img src={ShoppingCartIcon} alt="" />

              <S.ShoppingCartItemsCount>{2}</S.ShoppingCartItemsCount>
            </S.ShoppingCartLinkMobile>
          </Link>

          <UserEntry />

          <S.UserEntryMobile>
            <Link to={"/"}>
              <a>
                <img src={UserIcon} alt="" />
              </a>
            </Link>
          </S.UserEntryMobile>
        </S.TopRight>
      </S.TopWrapper>
    </S.HeaderTop>
  );
};
