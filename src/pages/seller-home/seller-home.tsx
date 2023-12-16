import { SellerHomeProfileIcon } from '@/ui';
import * as S from './styled';

export const SellerHome = () => {
    return (
        <S.Main>
            <S.Container>
                <S.Wrapper>
                    <S.BoxWrapper>
                        {SellerHomeProfileIcon()}
                        Saytda "" chi sanadan
                    </S.BoxWrapper>

                    <S.UserBalanceBox>
                        <S.Title>Hisobingizda: 0 so'm</S.Title>
                        <S.Balance>0 Bonus</S.Balance>
                        <S.Title>Tahminiy balans: 0 bonus</S.Title>
                    </S.UserBalanceBox>
                    <S.BoxWrapper>
                        <S.WrapperList>
                            <S.Item>
                                <S.LinkItem to={'/seller'}>
                                    Dastur hadida
                                </S.LinkItem>
                            </S.Item>
                            <S.Item>
                                <S.LinkItem to={'/seller'}>
                                    So'rovlar (0)
                                </S.LinkItem>
                            </S.Item>
                            <S.Item>
                                <S.LinkItem to={'/seller'}>
                                    Balans tarixi
                                </S.LinkItem>
                            </S.Item>
                            <S.Item>
                                <S.LinkItem to={'/seller'}>
                                    Diagrammalar
                                </S.LinkItem>
                            </S.Item>
                            <S.Item>
                                <S.LinkItem to={'/seller'}>
                                    Hayriya qutisi
                                </S.LinkItem>
                            </S.Item>
                            <S.Item>
                                <S.LinkItem to={'/seller'}>
                                    Reklama postlari
                                </S.LinkItem>
                            </S.Item>
                        </S.WrapperList>
                    </S.BoxWrapper>
                </S.Wrapper>
            </S.Container>
        </S.Main>
    );
};
