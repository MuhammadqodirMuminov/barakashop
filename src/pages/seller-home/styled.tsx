import { media } from '@/styled';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

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

export const BoxWrapper = styled.div`
    width: 100%;
    text-align: center;

    svg {
        margin: 0 auto;
    }
`;

export const UserBalanceBox = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 100%;
    max-height: 200px;
    background: linear-gradient(to top left, rgb(12, 102, 102), #19388d);
    border-radius: 5px;
    color: #fff;
    margin-bottom: 20px;
    padding: 20px 30px;
`;

export const Title = styled.p``;

export const Balance = styled.h3`
    margin: 30px 0 50px;
    font-size: 28px;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 40px 20px;
    background-color: #1c1c92;
    border-radius: 15px;
    color: #ffffff;

    svg {
        width: 100%;
        max-width: 100px;
    }
`;

export const WrapperList = styled.ul`
    display: grid;
    grid-gap: 10px;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    padding: 0 0 20px;
`;

export const Item = styled.li`
    &:nth-last-child() {
        margin-right: 0;
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

    &.active {
        color: #2997ff;

        svg {
            fill: red;
        }
    }
`;

export const LinkItem = styled(Link)`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    background-color: #303539;
    transition: background-color 0.3s ease-out;
    font-weight: 600;
    cursor: pointer;
`;
