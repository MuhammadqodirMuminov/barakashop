import { media } from '@/styled';
import { ButtonWithArrow } from '@/ui/button/with-arrow/styled';
import styled from 'styled-components';

export const ProductsBanners = styled.section`
	position: relative;

	.swiper {
		width: 100%;
		padding: 0 18px;

		&-slide {
			width: 407px;
			height: 250px;
		}
	}

	${media.tablet} {
		.swiper-slide {
			height: 180px;
		}
	}

	${media.mobile} {
		.swiper-slide {
			width: 203px;
		}
	}
`;

export const Top = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0px 18px;
`;

export const Banner = styled.div`
	margin-top: 30px;
	height: 100%;
	padding: 30px;
	background-color: #e9eefc;
	box-sizing: border-box;
	border-radius: 10px;

	h4 {
		display: flex;
		flex-direction: column;
		line-height: 32px;
	}

	${ButtonWithArrow} {
		margin-top: 20px;

		span:first-child {
			padding-top: 2px;
		}
	}

	${media.tablet} {
		margin-top: 15px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		h4 {
			font-size: 18px;
			line-height: 22px;
		}

		${ButtonWithArrow} {
			margin-top: auto;
		}
	}

	${media.mobile} {
		margin-top: 7px;
		padding: 20px;
	}
`;
