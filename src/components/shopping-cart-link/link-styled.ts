import { media } from '@/styled/media'
import styled from 'styled-components'
const media1270 = media.createMedia(1270)

export const ShoppingCartLink = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: auto;
  padding-left: 25px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  background: #f4f5f7;
  border-radius: 8px;

  span {
    margin-left: 10px;
  }

  /* ${media1270} {
    span {
      display: none;
    }
  } */
`

export const ShoppingCartItemsCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 7px 2px;
  background: #fb6019;
  border-radius: 25px;
  font-size: 14px;
  color: #fff;
`
