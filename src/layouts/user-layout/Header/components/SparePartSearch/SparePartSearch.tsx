
import * as S from './SparePartSearch.styled'
import { Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react'
import LoupeIcon from '@/assets/icons/loupe.svg'

export const SparePartSearch = () => {
  return (
    <S.SparePartSearch>
     <Stack spacing={4}>
        <InputGroup>
          <Input style={{background:"#f4f5f7"}} placeholder="Enter amount" />
          <InputRightElement>
            <img src={LoupeIcon} alt="" />
          </InputRightElement>
        </InputGroup>
      </Stack>
    </S.SparePartSearch>
  )
}
