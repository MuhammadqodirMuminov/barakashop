
import * as S from './SparePartSearch.styled'
import { Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react'

export const SparePartSearch = () => {
  return (
    <S.SparePartSearch>
     <Stack spacing={4}>
        <InputGroup>
          <Input style={{background:"#f4f5f7"}} placeholder="Enter amount" />
          <InputRightElement>
            <svg
              width="24"
              height="24"
              fill="#6b59cc"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 11a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-9a9 9 0 1 0 5.618 16.032l3.675 3.675a1 1 0 0 0 1.414-1.414l-3.675-3.675A9 9 0 0 0 11 2Z"
              ></path>
            </svg>
          </InputRightElement>
        </InputGroup>
      </Stack>
    </S.SparePartSearch>
  )
}
