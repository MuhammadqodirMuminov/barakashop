import { PhoneIcon } from '@chakra-ui/icons';
import * as S from './styled';
import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';

export const SellerProfileChangePhone = () => {
    return (
        <S.Wrapper>
            <S.Box>
                <S.Title>Telefon Raqamni O‘zgartirish</S.Title>
                <S.Span>
                    <PhoneIcon />
                </S.Span>

                <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <PhoneIcon />
                        </InputLeftElement>
                        <Input
                            type='tel'
                            placeholder='+998 (90) 123-45-67'
                        />
                    </InputGroup>
                    <S.Button>Kodni olish</S.Button>
                </Stack>
            </S.Box>
        </S.Wrapper>
    );
};
