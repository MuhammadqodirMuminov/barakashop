import { media } from '@/styled/media'
import styled from 'styled-components'

export const LocationChoose = styled.div``
const media1270 = media.createMedia(1270)

export const CurrentLocation = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    margin-left: 5px;
    padding-top: 5px;
  }

  ${media1270} {
    span {
      display: none;
    }
  }

`

