import { media } from '@/styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const Title = styled.h1`
    font-size: 28px;
    font-weight: 400;
    text-align: center;
`;

export const Text = styled.p`
    font-size: 2rem;
`

export const WrapperList = styled.ul`
    display: grid;
    grid-gap: 10px;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 0 0 20px;
`;

export const Item = styled.li`
    width: 100%;
    max-width: 310px;
`;

export const LinkItem = styled(Link)`
    word-wrap: break-word;
    background-clip: initial;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    height: -webkit-max-content;
    height: max-content;
    min-width: 0;
    position: relative;
`;

export const Box = styled.div`
    &:nth-child(1) {
        display: flex;
        align-items: start;
        justify-content: space-between;
        padding: 0.75rem 1.25rem;
        background-color: rgb(0 0 0 / 3%);
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }
`;
