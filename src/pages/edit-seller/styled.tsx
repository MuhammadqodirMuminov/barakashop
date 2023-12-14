import { media } from '@/styled';
import styled from 'styled-components';

export const Main = styled.main`
    position: relative;
    padding: 15px 0;
    width: 100%;
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

export const Title = styled.h2`
    font-size: 28px;
    font-weight: 600;
    line-height: 33px;
    margin-bottom: 25px;
`;

export const Name = styled.p`
    color: #293462;
    font-size: 22px;
    font-weight: 600;
    line-height: 26px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 20px 20px 25px;
    border-radius: 20px;
    background-color: #eff1f6;

    ${media.tablet} {
        justify-content: center;
        flex-direction: column;
        gap: 15px;
    }
`;

export const RightSide = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 10px;

    svg {
        width: 90px;
        height: 90px;
    }

    svg:last-child {
        width: 20px;
        height: 20px;
    }

    ${media.tablet} {
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;
export const LeftSide = styled.div``;

export const ChangeImg = styled.label`
    display: inline-flex;
    align-items: center;
    margin-top: 8px;
    padding: 5px 15px;
    border-radius: 10px;
    border: none;
    color: #ffffff;
    background-color: #2f8af5;

    svg {
        margin-right: 5px;
        width: 20px;
        height: 20px;
    }
`;

export const ChangeImageInput = styled.input`
    display: none;
`;

export const Box = styled.div``;

export const YourId = styled.div`
    padding: 20px 30px;
    text-align: center;
    border-radius: 20px;
    background-color: #ffffff;
`;

export const InputGroupTitle = styled.h3`
    margin-top: 20px;
    color: #293462;
    font-size: 22px;
    font-weight: 600;
    line-height: 26px;
`;

export const InputGroup = styled.div`
    display: grid;
    justify-items: center;
    grid-gap: 15px;
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
    margin: 20px auto 0;
    padding: 0 0 20px;
`;

export const Label = styled.label`
    position: relative;
    width: 100%;
`;

export const InputTitle = styled.span`
    position: absolute;
    top: 10px;
    z-index: 3;
    display: inline-block;
    color: #2b2b2b;
    left: 15px;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 0.385rem;
`;

export const Input = styled.input`
    width: 100%;
    padding: 25px 15px 10px;
    background-color: #e9ecef;
    border: none;
    font-size: 20px;
    border-radius: 20px;
    outline: none;

    &:hover {
        cursor: pointer;
    }
`;

export const IdNumber = styled.h1`
    color: #fcca32;
`;
export const HrLine = styled.hr`
    height: 120px;
    border: 2px solid #dbdde7;

    ${media.tablet} {
        margin: 0;
        width: 100%;
        background-color: #dbdde7;
        height: 1px;
    }
`;

export const SaveButton = styled.button`
    margin-top: 20px;
    max-width: 300px;
    padding: 21px;
    width: 100%;
    border-radius: 18px;
    color: #2b2b2b;
    background-color: #fc3;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.7;
    }

    ${media.tablet} {
        max-width: 100%;
    }
`;
