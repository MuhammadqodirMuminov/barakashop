import { DeleteIcon } from '@chakra-ui/icons';
import * as S from './styled';

// const oqims = [
//     {
//         id: 1,
//         name: 'Avtonashina Uchun Nasos',
//         created_at: new Date(),
//         generated_link: '',
//         product: {}
//     },
// ];

export const SellerOqim = () => {
    return (
        <S.Main>
            <S.Container>
                <S.Title>Mening havolalarim</S.Title>
                <S.WrapperList>
                    <S.Item>
                        <S.LinkItem to={'/'}>
                            <S.Box>
                                <S.Text>Avtonashina Uchun Nasos</S.Text>
                                <DeleteIcon fontSize={'20px'} color={'red'} />
                            </S.Box>
                            <S.Box>2</S.Box>
                            <S.Box>3</S.Box>
                        </S.LinkItem>
                    </S.Item>
                </S.WrapperList>
            </S.Container>
        </S.Main>
    );
};
