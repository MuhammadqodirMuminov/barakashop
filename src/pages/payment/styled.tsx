import { media } from "@/styled";
import styled from "styled-components";
const media760 = media.createMedia(760);
const media680 = media.createMedia(680);

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
  justify-content: space-between;
  overflow: hidden;

  ${media680} {
    flex-direction: column;
  }
`;

export const PaymentHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  font-size: 20px;
  padding: 0.75rem 1.25rem;
`;
export const PaymentCard = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

export const PaymentCardBody = styled.div`
  padding: 1.25rem;
`;

export const PaymentCardyLi = styled.li`
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  gap: 3px;
  padding: 0.75rem 1.25rem;
  position: relative;
`;

export const PaymentCardBodyLi = styled.li`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  gap: 3px;
  padding: 0.75rem 1.25rem;
  position: relative;
`;

export const PaymentCardBodyP = styled.p`
  padding: 1.25rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 0;
  padding-bottom: 20px;
  position: relative;
`;

export const LabelGroup = styled.label`
  display: inline-block;
  margin-bottom: 0.385rem;
`;

export const FormControlInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid #d7e1ea;
  border-radius: 0.3rem;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.428571429;
  outline: none;
  padding: 0.525rem 1rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;
`;

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

export const NoDataTable = styled.div`
display: grid;
    place-items: center;
    width: 100%;
`