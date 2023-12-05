import { SparePartSearch, HamburgerMenu, Phone, UserEntry } from "..";

import { NavItem } from "../../Header.types";

import * as S from "./Top.styled";

import logo from "@/assets/img/logo/logo.png";
import logoMobile from "@/assets/img/logo/logo-mobile.png";
import { Link } from "react-router-dom";
import { LocationChoose } from "../LocationChoose/LocationChoose";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <path
                  d="M1.5 1.5H4L7 15c.167.833 1.1 2.4 3.5 2l7.5-.5c1 0 3.1-.6 3.5-3l1-5c.5-1.167.8-3.4-2-3h-10"
                  stroke="#6B59CC"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <circle cx="8.5" cy="22.5" r="1.5" fill="#6B59CC"></circle>
                <circle cx="19.5" cy="22.5" r="1.5" fill="#6B59CC"></circle>
              </svg>

              <S.ShoppingCartItemsCount>{2}</S.ShoppingCartItemsCount>
            </S.ShoppingCartLinkMobile>
          </Link>

          <UserEntry />

          <S.UserEntryMobile>
            <Link to={"/"}>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="24"
                  height="24"
                >
                  <path
                    d="M12 14.5c3.47 0 5.464.853 6.593 1.716 1.215.93 1.407 2.559 1.407 4.088C20 21.24 19.24 22 18.304 22H5.696C4.76 22 4 21.24 4 20.304c0-1.529.192-3.159 1.407-4.088C6.536 15.353 8.529 14.5 12 14.5z"
                    fill="#5946D7"
                    fill-opacity="0.1"
                    stroke="#6B59CC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="#6B59CC"
                    stroke-width="1.5"
                  ></circle>
                </svg>
              </a>
            </Link>
          </S.UserEntryMobile>
        </S.TopRight>
      </S.TopWrapper>
    </S.HeaderTop>
  );
};
