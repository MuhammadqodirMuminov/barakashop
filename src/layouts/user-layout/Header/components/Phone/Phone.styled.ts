import { media } from '@/styled/media'
import styled from 'styled-components'
const media1270 = media.createMedia(1270)

export const Phone = styled.a`
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
    padding-top: 5px;
    font-size: 16px;
    line-height: 22px;
    font-weight: 600;
  }

  ${media1270} {
    span {
      display: none;
    }
  }

  
`
