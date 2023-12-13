import { useState } from 'react';
import { LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Stack,
} from '@chakra-ui/react';
import * as S from './styled';

export const SellerProfileChangePassword = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <S.Wrapper>
            <S.Box>
                <S.Title>Shaxsiy Parolni O‘zgartirish</S.Title>
                <S.Span>
                    <LockIcon />
                </S.Span>

                <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <LockIcon />
                        </InputLeftElement>
                        <Input
                            type={show ? 'text' : 'password'}
                            placeholder='********'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button
                                h='1.75rem'
                                size='sm'
                                onClick={handleClick}
                            >
                                {show ? <ViewOffIcon /> : <ViewIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <LockIcon />
                        </InputLeftElement>
                        <Input
                            type={show ? 'text' : 'password'}
                            placeholder='********'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button
                                h='1.75rem'
                                size='sm'
                                onClick={handleClick}
                            >
                                {show ? <ViewOffIcon /> : <ViewIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <S.Button>So'rov yuborish</S.Button>
                </Stack>
            </S.Box>
        </S.Wrapper>
    );
};
