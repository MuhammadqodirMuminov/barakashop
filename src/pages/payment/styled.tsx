import { media } from "@/styled";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
const media760 = media.createMedia(760);
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

export const Title = styled.p``;

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

export const StatWrapper = styled.div``;


export const PaymentWrap = styled.div`
  display: flex;
  gap: 20px;
`


export const CustomTable = styled.div`
  border: 1px solid #d7e1ea;
  margin-top: 20px;

  ${media760} {
    margin: 20px -20px 0;
  }
`;

export const CustomTableAnimate = styled.div`
  overflow: hidden;
  height: auto;
`;



export const RcTableContent = styled.div`
  overflow: auto;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: auto;
`;

export const Thead = styled.thead`
  background: #f0f4f8;
  border-bottom: 1px solid #d4d8da;
`;

export const Tr = styled.tr`
  background-color: transparent !important;
`;

export const Th = styled.th`
  text-align: left;
  text-transform: capitalize;
  padding: 0.75rem;
  white-space: nowrap;
  
`;

export const Td = styled.td`
  cursor: pointer;
  font-size: 16px;
  padding: 0.75rem;

`;

export const Tbody = styled.tbody`
  cursor: pointer;
  font-size: 16px;
`;

export const RcTableCell = styled.table`
  padding: 0.75rem;
`;


export const RcTable = styled.div`
  overflow: hidden;
  overflow: auto;
  width: 100%;

  tr:nth-child(2n) {
  background-color: #f0f4f8;
    
  }
`;