import * as S from './styled';
import { SellerHomeProfileIcon } from '@/ui';
import { EditIcon } from '@chakra-ui/icons';
import { Skeleton, SkeletonCircle } from '@chakra-ui/react';

export const SellerProfileEditSeller = () => {
    const loading = false
    return (
        <S.Main>
            <S.Container>
                <S.Title>Shaxsiy ma'lumotlar</S.Title>
                <S.Wrapper>
                    <S.RightSide>
                        <SkeletonCircle isLoaded={loading} size={20}>
                        {SellerHomeProfileIcon()}
                        </SkeletonCircle>
                        <S.Box>
                            <S.Name><Skeleton isLoaded={loading}>Nasriddinov Bunyod</Skeleton></S.Name>
                            <S.ChangeImg>
                                <EditIcon
                                    fontSize={'20px'}
                                    color='gray.300'
                                />
                                Rasmni o'zgartirish
                                <S.ChangeImageInput type='file' />
                            </S.ChangeImg>
                        </S.Box>
                    </S.RightSide>
                    <S.HrLine />
                    <S.LeftSide>
                        <S.YourId>
                            <S.IdNumber><Skeleton isLoaded={loading}>7108402</Skeleton></S.IdNumber>
                            Sizning ID raqamingiz
                        </S.YourId>
                    </S.LeftSide>
                </S.Wrapper>
                <S.InputGroupTitle>
                    Ma’lumotlarni o‘zgartirish
                </S.InputGroupTitle>
                <S.InputGroup>
                    <S.Label>
                        <S.InputTitle>Telefoningiz:</S.InputTitle>
                        <S.Input placeholder='+9981234567' />
                    </S.Label>
                    <S.Label>
                        <S.InputTitle>Email:</S.InputTitle>
                        <S.Input placeholder='+9981234567@gmail.com' />
                    </S.Label>
                    <S.Label>
                        <S.InputTitle>Ism:</S.InputTitle>
                        <S.Input placeholder='Bunyodjon' />
                    </S.Label>
                    <S.Label>
                        <S.InputTitle>Familya:</S.InputTitle>
                        <S.Input placeholder='Nasriddinov' />
                    </S.Label>
                    <S.Label>
                        <S.InputTitle>Viloyat:</S.InputTitle>
                        <S.Input placeholder='Andijon' />
                    </S.Label>
                    <S.Label>
                        <S.InputTitle>Tuman:</S.InputTitle>
                        <S.Input placeholder='Baliqchi' />
                    </S.Label>
                </S.InputGroup>
                <S.SaveButton>O'zgarishlarni  Saqlash</S.SaveButton>
            </S.Container>
        </S.Main>
    );
};
