import { media } from '@/styled';
import styled from 'styled-components';
import { Checkbox as Check } from '@chakra-ui/react';

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

export const WrapperList = styled.ul`
    display: grid;
    grid-gap: 10px;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 30px;
    padding: 0 0 20px;
`;

export const Item = styled.li`
    width: 100%;
    max-width: 310px;
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
        align-items: center;
        justify-content: space-between;
        padding: 0.75rem 1.25rem;
        background-color: rgb(0 0 0 / 3%);
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }

    &:nth-child(2) {
        padding: 20px;
    }

    &:nth-child(3) {
        border-top: 1px solid rgba(0, 0, 0, 0.125);
    }
`;

export const Text = styled.p`
    font-size: 20px;

    &:nth-child(2) {
        margin-top: 5px;
        font-size: 16px;
    }
`;

export const Span = styled.span`
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    color: #333;
    font-size: 0.9rem;
    flex-wrap: 400;
    background-color: #e9ecef;
`;

export const Checkbox = styled(Check)`
    margin-top: 10px;
`;

export const Time = styled.p`
    display: block;
    margin-top: 20px;
    text-align: right;
`;

export const CopyButton = styled.button`
    display: block;
    margin: 15px 20px 20px;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    border: 1px solid #2997ff;
    background-color: #2997ff;

    &:hover {
        background-color: #fff;
        color: #2997ff;
        border-color: #2997ff;
    }

    &:active {
        font-weight: 600;
        opacity: 0.8;
    }
`;

export const AllOqimTitle = styled.h3``;
