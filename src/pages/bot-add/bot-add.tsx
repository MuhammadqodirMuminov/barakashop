import * as S from './styled';
import { Input, InputGroup, Stack } from '@chakra-ui/react';
import { TelegramIcon } from '@/ui';

export const SellerProfileBotAdd = () => {
    return (
        <S.Wrapper>
            <S.Box>
                <S.Title>Telegram botni biriktirish</S.Title>
                <S.Span>
                    <TelegramIcon />
                </S.Span>

                <Stack spacing={4}>
                    <S.Text>Telegram id raqami:</S.Text>

                    <InputGroup>
                        <Input
                            type='number'
                            placeholder='********'
                        />
                    </InputGroup>
                    <S.Button>Biriktirish</S.Button>
                </Stack>
            </S.Box>
        </S.Wrapper>
    );
};
