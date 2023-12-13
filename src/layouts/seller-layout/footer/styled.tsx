import styled from 'styled-components';
import { media } from '@/styled';

export const Footer = styled.footer`
    margin-top: auto;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px -3px 8px;

    ${media.tablet} {
        padding-bottom: 70px;
        box-shadow: none;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1240px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    box-sizing: border-box;

    ${media.createMedia(666)} {
        padding: 0 15px;
    }
`;

export const Text = styled.p`
    text-align: center;
`;
