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
import {
    Button,
    Popover,
    PopoverArrow,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    Portal,
    Text,
} from '@chakra-ui/react';
import {useActions} from '@/hooks'

export const Header = () => {
    const { logout } = useActions()
    const handleLogout = () => {
        logout();
        location.replace(ROUTES.home);
    };

    return (
        <S.Header>
            <S.Container>
                <S.WrapperList>
                    <S.Item>
                        <S.LinkItem to={ROUTES.seller}>SHOP</S.LinkItem>
                    </S.Item>
                    <S.SubWrapperList>
                        <S.SubItem>
                            <S.NavLinkItem to={ROUTES.seller}>
                                {HeaderDashboardIcon()}
                                <S.Span>Dashboard</S.Span>
                            </S.NavLinkItem>
                        </S.SubItem>
                        <S.SubItem>
                            <S.NavLinkItem to={ROUTES.sellerMarket}>
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
                            <S.NavLinkItem to={ROUTES.sellerStatistics}>
                                {HeaderStatists()}

                                <S.Span>Statistika</S.Span>
                            </S.NavLinkItem>
                        </S.SubItem>
                        <S.SubItem>
                            <S.NavLinkItem to={ROUTES.sellerPayment}>
                                {HeaderPaymentIcon()}
                                <S.Span>To'lov</S.Span>
                            </S.NavLinkItem>
                        </S.SubItem>
                    </S.SubWrapperList>
                    <S.Item>
                        <Popover>
                            <PopoverTrigger>
                                <Button
                                    display={'flex'}
                                    flexDirection={'column'}
                                    bgColor={'#ffffff'}
                                >
                                    {HeaderProfileIcon()}
                                    Profile
                                </Button>
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent w={150}>
                                    <S.NavLinkItem to={ROUTES.sellerProfile}>
                                        <Text p={2}>Profile</Text>
                                    </S.NavLinkItem>
                                    <PopoverArrow />
                                    <Button
                                        onClick={handleLogout}
                                        justifyContent={'start'}
                                        color={'red'}
                                    >
                                        Logout
                                    </Button>
                                    <PopoverCloseButton />
                                </PopoverContent>
                            </Portal>
                        </Popover>
                    </S.Item>
                </S.WrapperList>
            </S.Container>
        </S.Header>
    );
};
