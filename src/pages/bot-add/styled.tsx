import { media } from '@/styled';
import styled from 'styled-components';

export const Wrapper = styled.div`
	display: block;
	width: 100%;
	padding: 0 20px 20px;

	${media.laptopMin} {
		font-size: 24px;
	}

	${media.tablet} {
		margin-top: 20px;
		padding: 0;
	}
`;

export const Title = styled.h1`
	width: 100%;
	font-weight: 700;
	font-size: 28px;
	text-align: center;

	${media.tablet} {
		font-size: 20px;
		font-weight: 600;
	}
`;

export const Text = styled.span`
    
`

export const Box = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 0 auto;
	width: 100%;
	padding: 30px;
	background-color: #fff;
	border: 1px solid rgba(41, 52, 98, 0.1);
	border-radius: 24px;
`;

export const Span = styled.span`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	margin: 20px 0;
	border-radius: 50%;
	background-color: #2934620d;
`;

export const Button = styled.button`
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
`;
