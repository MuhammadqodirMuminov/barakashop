import styled from 'styled-components';

export const ProductsOilsSection = styled.section`
	margin-top: 6px;
`;

export const Top = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0px 18px;
`;

export const Carousel = styled.div`
	margin-top: 20px;

	.swiper {
		width: 100%;
		padding: 0px 18px;
		// margin-left: -18px;
		// margin-top: -18px;
	}

	.swiper-slide {
		width: 300px;
		height: 410px;
	}
`;

export const Banner = styled.div`
	max-width: 300px;
	width: 100%;
	height: 385px;
	padding: 30px;
	border-radius: 10px;
	background-color: gray;
	box-sizing: border-box;

	p {
		font-weight: 700;
		line-height: 28.8px;
		color: #fff;
	}
`;
