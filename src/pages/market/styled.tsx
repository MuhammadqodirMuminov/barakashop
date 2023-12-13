import { media } from '@/styled';
import styled from 'styled-components';
import { Checkbox as Check } from '@chakra-ui/react';
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
    margin-top: 20px;
    font-size: 28px;
    font-weight: 400;
    text-align: center;
`;

export const CategoryWrapper = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
    overflow: auto;
    padding: 10px 0;
    width: 100%;
`;

export const CategoryItem = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    font-size: 15px;
    font-weight: 300;
    border: 1px solid #ddd;
    letter-spacing: 0.72px;
    line-height: 1.4375rem;
    text-align: center;
    cursor: pointer;

    img {
        margin-right: 10px;
        width: 18px;
        height: 18px;
    }
`;

export const WrapperList = styled.ul`
    display: grid;
    justify-items: center;
    grid-gap: 15px;
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin: 20px auto 0;
    padding: 0 0 20px;
`;

export const Item = styled.li`
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;

export const LinkItem = styled(Link)`
    color: #2997ff;

    &:hover {
        text-decoration: underline;
    }
`;

export const Text = styled.p`
    font-size: 16px;
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

export const CreateOqimButton = styled.button`
    display: block;
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
