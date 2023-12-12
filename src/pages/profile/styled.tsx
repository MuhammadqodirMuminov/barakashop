import { media } from '@/styled';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Main = styled.main`
    position: relative;
    padding: 15px 0;
`;

export const Container = styled.div`
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;

    ${media.createMedia(666)} {
        padding: 0 15px;
    }
`;

export const Wrapper = styled.div`
    display: flex;

    ${media.tablet} {
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

export const Sidebar = styled.div`
    ${media.tablet} {
        width: 100%;
    }
`;

export const WrapperList = styled.ul`
    display: grid;
    grid-gap: 10px;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
    width: 100%;
`;

export const Item = styled.li`
    width: 100%;
`;

export const NavLinkItem = styled(NavLink)`
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #e4d5d5;
    border-radius: 10px;

    &.active {
        color: #1976d2;
    }

    svg {
        width: 18px;
        height: 18px;
        margin-right: 10px;
    }
`;

export const Box = styled.div``;
