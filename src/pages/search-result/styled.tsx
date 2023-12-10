import { media } from '@/styled';
import styled from 'styled-components';

export const Main = styled.main`
    margin: 30px 0;
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
    align-items: center;
`;

export const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    grid-gap: 20px;
    margin-top: 20px;
`;

export const NoProductText = styled.h2`
    margin: auto;
    text-align: center;
    justify-content: center;
    font-size: 28px;

    ${media.createMedia(666)} {
        font-size: 18px;
    }
`;

export const Line = styled.span`
    display: block;
    width: 100%;
    height: 1px;
    background-color: #cccccc;
`;
