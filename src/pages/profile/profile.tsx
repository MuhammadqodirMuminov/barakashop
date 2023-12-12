import { Outlet } from 'react-router-dom';
import * as S from './styled';
import { SellerProfileGridIcon } from '@/ui';
import { LockIcon, PhoneIcon } from '@chakra-ui/icons';
import { ROUTES } from '@/constants';

export const SellerProfile = () => {
    return (
        <S.Main>
            <S.Container>
                <S.Wrapper>
                    <S.Sidebar>
                        <S.WrapperList>
                            <S.Item>
                                <S.NavLinkItem to={ROUTES.sellerProfileEditSeller}>
                                    {SellerProfileGridIcon()}
                                    Shaxsiy ma'lumotlar
                                </S.NavLinkItem>
                            </S.Item>

                            <S.Item>
                                <S.NavLinkItem
                                    to={ROUTES.sellerProfileChangePhone}
                                >
                                    <PhoneIcon />
                                    Telefon raqamni o'zgartirish
                                </S.NavLinkItem>
                            </S.Item>

                            <S.Item>
                                <S.NavLinkItem
                                    to={ROUTES.sellerProfileChangePassword}
                                >
                                    <LockIcon />
                                    Parolni o'zgartirish
                                </S.NavLinkItem>
                            </S.Item>
                        </S.WrapperList>
                    </S.Sidebar>
                    <Outlet />
                </S.Wrapper>
            </S.Container>
        </S.Main>
    );
};
