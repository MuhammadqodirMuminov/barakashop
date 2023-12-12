import * as S from './styled';
import { ROUTES } from '../../../constants/routes/endpoints';
import {
    HeaderDashboardIcon,
    HeaderMarketIcon,
    HeaderOqimIcons,
    HeaderPaymentIcon,
    HeaderProfileIcon,
    HeaderStatists,
} from '@/ui';

export const Header = () => {
    return (
        <S.Header>
            <S.Container>
                <S.WrapperList>
                    <S.Item>
                        <S.LinkItem to={'/seller'}>SHOP</S.LinkItem>
                    </S.Item>
                    <S.SubWrapperList>
                        <S.SubItem>
                            <S.NavLinkItem to={'/seller'}>
                                {HeaderDashboardIcon()}
                                <S.Span>Dashboard</S.Span>
                            </S.NavLinkItem>
                        </S.SubItem>
                        <S.SubItem>
                            <S.NavLinkItem to={'/seller'}>
                                {HeaderMarketIcon()}
                                <S.Span>Market</S.Span>
                            </S.NavLinkItem>
                        </S.SubItem>
                        <S.SubItem>
                            <S.NavLinkItem to={ROUTES.sellerOqim}>
                                {HeaderOqimIcons()}
                                <S.Span>Oqim</S.Span>
                            </S.NavLinkItem>
                        </S.SubItem>
                        <S.SubItem>
                            <S.NavLinkItem to={'/seller'}>
                                {HeaderStatists()}

                                <S.Span>Statistika</S.Span>
                            </S.NavLinkItem>
                        </S.SubItem>
                        <S.SubItem>
                            <S.NavLinkItem to={'/seller'}>
                                {HeaderPaymentIcon()}

                                <S.Span>To'lov</S.Span>
                            </S.NavLinkItem>
                        </S.SubItem>
                    </S.SubWrapperList>
                    <S.Item>
                        <S.NavLinkItem to={ROUTES.sellerProfile}>
                            {HeaderProfileIcon()}
                            Profile
                        </S.NavLinkItem>
                    </S.Item>
                </S.WrapperList>
            </S.Container>
        </S.Header>
    );
};
