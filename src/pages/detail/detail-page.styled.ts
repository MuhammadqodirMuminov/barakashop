import styled from "styled-components";
import { Wrapper } from "@/styled";

export { Wrapper };
export const SingleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  gap: 40px;
`;

export const SingleBox = styled.div``;

export const Img = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 15px;
  object-fit: cover;
  object-position: center;
`;

export const SingleImageBox = styled.div`
  width: 100%;
  max-width: 500px;
  height: 600px;
`;

export const SingleContentWrap = styled.div`
  width: 100%;
  max-width: 700px;
`;

export const SingleContentLine = styled.span`
  border-bottom: 1px solid rgba(54, 54, 64, 0.2);
  display: block;
  margin-bottom: 24px;
  padding-top: 24px;
`;

export const SingleRating = styled.div`
  display: flex;
  align-content: center;
  gap: 10px;
  margin-bottom: 15px;
`;

export const SingleTitle = styled.h3`
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
  margin: 0;
  word-break: break-word;
`;
export const SingleCount = styled.div`
  margin-bottom: 20px;
`;

export const SingleProductCount = styled.h3`
  color: blue;
`;

export const SingleProductPrice = styled.h3`
  font-weight: bold;
`;
export const DetailText = styled.p `
margin: 0;
font-weight: bold;
font-size: 18px;
margin-bottom: 20px;
color: #023581;
`


export const DetailMoreWrap = styled.div `
width: 100%;

display: block;
margin: 0 auto;
border: 1px solid hsla(0,0%,92%,.539);
padding: 30px;
margin-bottom: 30px;
border-radius: 10px;

`

export const DetailMoreDesc = styled.p `
margin: 0;
font-weight: 500;
line-height: 1.5;
`