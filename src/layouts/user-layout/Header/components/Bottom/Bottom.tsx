/* eslint-disable @typescript-eslint/no-unused-vars */

import { Link } from 'react-router-dom'
import { AllCategories,  ShoppingCartLink, SparePartSearch } from '..'

import { NavItem } from '../../Header.types'

import * as S from './Bottom.styled'

interface HeaderBottomProps {
  nav: NavItem[]
}

export const HeaderBottom = ({ nav }: HeaderBottomProps) => {
  const navItems = nav.map(({ label, link }) => {
    return (
      <S.NavItem key={label}>
        <Link to={'/'}>{label}</Link>
      </S.NavItem>
    )
  })

  return (
    <S.HeaderBottom>
      <S.BottomWrapper>
        <AllCategories />

        <SparePartSearch />

        <S.Nav>
          <ul>{navItems}</ul>
        </S.Nav>

        <ShoppingCartLink />
      </S.BottomWrapper>
    </S.HeaderBottom>
  )
}
