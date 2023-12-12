import { media } from '@/styled';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Header = styled.header`
    padding: 15px 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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

export const WrapperList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

export const SubWrapperList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style-type: none;

    ${media.tablet} {
        display: grid;
        gap: 5px;
        grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        width: 100%;
        padding: 7px;
        background-color: #ffffff;
        -webkit-box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.3);
        box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.3);
    }
`;

export const Item = styled.li`
    cursor: pointer;
`;

export const SubItem = styled.li`
    margin-right: 30px;
    text-align: center;

    &:nth-last-child() {
        margin-right: 0;
    }

    ${media.tablet} {
        padding: 10px;
        margin-right: 0;
    }
`;

export const Span = styled.span`
    ${media.tablet} {
        display: none;
    }
`;

export const NavLinkItem = styled(NavLink)`
    svg {
        display: block;
        margin: 0 auto;
        width: 18px;
        height: 18px;
        fill: #727c8e;
    }

    /* svg:last-child {
        width: 28px;
        height: 28px;
        fill: none;
    } */

    &.active {
        color: #2997ff;

        svg {
            fill: red;
        }
    }
`;

export const LinkItem = styled(Link)`
    font-weight: 600;
`;

export const BoxWrapper = styled.div``;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;
