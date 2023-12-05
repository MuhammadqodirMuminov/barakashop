import React from "react";

import { NavItem } from "../../Header.types";

import * as S from "./HamburgerMenu.styled";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Phone, ShoppingCartLink, UserEntry } from "..";
import { LocationChoose } from "../LocationChoose/LocationChoose";

interface HamburgerMenuProps {
  nav: NavItem[];
}

export const HamburgerMenu = ({ nav }: HamburgerMenuProps) => {
  const navItems = nav.map(({ label, link }) => {
    return (
      <li key={link}>
        <Link to={"/"}>
          <S.MenuNavLink>{label}</S.MenuNavLink>
        </Link>
      </li>
    );
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <S.HamburgerMenu>
      <S.HamburgerButton onClick={onOpen}>
        <span />
        <span />
        <span />
      </S.HamburgerButton>

      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          
          <S.MenuTop>
            <UserEntry />
          </S.MenuTop>

          <DrawerBody>
            <S.Menu>
              <S.MenuMiddle>
                <LocationChoose />
                <Phone />
                <ShoppingCartLink />
              </S.MenuMiddle>
              <S.MenuBottom>
                <S.MenuNavList>{navItems}</S.MenuNavList>
              </S.MenuBottom>
            </S.Menu>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </S.HamburgerMenu>
  );
};
