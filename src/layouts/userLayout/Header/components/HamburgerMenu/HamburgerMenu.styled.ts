import styled from 'styled-components'
import { css } from '@emotion/react'

import { media } from '@/styled/media'

import { UserEntry } from '../UserEntry/UserEntry.styled'
import { ShoppingCartLink } from '../ShoppingCartLink/ShoppingCartLink.styled'

const media666 = media.createMedia(666)

interface HamburgerButtonProps {
  active: boolean
}

export const HamburgerMenu = styled.div`
  display: none;
  margin-right: 15px;

  ${media666} {
    display: block;
  }
`

export const HamburgerButton = styled.button<HamburgerButtonProps>`
  position: relative;
  z-index: 1300;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;

  span {
    width: 18px;
    height: 2px;
    border-radius: 10px;
    background: black;
    transition: 0.3s;

    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }

 
`

export const Menu = styled.div`
  background: #fff;
`

export const MenuTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  padding: 0 15px;

  ${media.mobile} {
    padding: 0 10px;

    ${UserEntry} {
      span {
        margin: 0 3px;
      }
    }
  }
`

export const MenuMiddle = styled.div`
  padding: 20px 0;
  border-top: 1px solid #e3e3e8;
  display: flex;
  /* gap: 20px; */
  justify-content: space-around;
  border-bottom: 1px solid #e3e3e8;

  & > *:not(:last-child) {
    /* margin-bottom: 20px; */
  }



  ${ShoppingCartLink} {
    width: auto;
    padding-left: 0;
    padding-right: 0;
    background: transparent;
  }
`

export const MenuBottom = styled.div`
  padding: 10px 0;
`

export const MenuNavList = styled.ul`
list-style:none; `

export const MenuNavLink = styled.a`
  padding: 15px 4px;
  margin-top: 10px;
`
