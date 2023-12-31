import styled from 'styled-components';

import { Wrapper } from '@/styled/components';
import { media } from '@/styled/media';

import { ShoppingCartLink } from '../shopping-cart-link/link-styled';
import { SparePartSearch } from '../spare-part-search/styled';

const media666 = media.createMedia(666);

export const HeaderBottom = styled.div`
	display: flex;
	padding: 13px 0;
`;

export const BottomWrapper = styled(Wrapper)`
	flex-direction: row;
	align-items: center;
	height: 44px;

	${SparePartSearch} {
		display: none;
		max-width: 100%;
		margin-left: 10px;
	}
	a {
		margin-left: auto;
	}

	${media666} {
		${SparePartSearch} {
			display: block;
		}

		${ShoppingCartLink} {
			display: none;
		}
	}
`;

export const Nav = styled.nav`
	margin-left: 20px;
	list-style: none;

	ul {
		display: flex;
		height: 100%;
		list-style: none;
	}

	${media666} {
		display: none;
	}
`;

export const NavItem = styled.li`
	a {
		height: 100%;

		padding: 14px 15px 10px;
		border-radius: 8px;
		transition: 0.3s;
		box-sizing: border-box;

		&:hover {
			background: #f4f5f7;
		}
	}

	${media.createMedia(1258)} {
		&:nth-child(6) {
			display: none;
		}
	}

	${media.createMedia(1135)} {
		&:nth-child(5) {
			display: none;
		}
	}

	${media.createMedia(1040)} {
		&:nth-child(4) {
			display: none;
		}
	}

	${media.createMedia(836)} {
		&:nth-child(3) {
			display: none;
		}
	}
`;
