import styled from 'styled-components';

import { media } from '@/styled/media';

import { ShoppingCartLink } from '../shopping-cart-link/link-styled';
import { UserEntry } from '../user-entry/styled';
import { Phone } from '../phone/styled';
import { CurrentLocation } from '../location-choose/styled';

const media666 = media.createMedia(666);

// interface HamburgerButtonProps {
// 	active: boolean;
// }

export const HamburgerMenu = styled.div`
	display: none;
	margin-right: 15px;

	${media666} {
		display: block;
	}
`;

export const HamburgerButton = styled.button`
	position: relative;
	z-index: 1300;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	padding: 0;
	background: transparent;
	border: none;
	cursor: pointer;

	span {
		width: 18px;
		height: 2px;
		border-radius: 10px;
		background: black;
		transition: 0.3s;

		&:not(:last-child) {
			margin-bottom: 5px;
		}
	}
`;

export const Menu = styled.div`
	background: #fff;
`;

export const MenuTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 60px;
	padding: 0 15px;

	${media.mobile} {
		padding: 0 10px;

		${UserEntry} {
			span {
				margin: 0 3px;
			}
		}
	}
`;

export const MenuMiddle = styled.div`
	padding: 15px 0;
	border-top: 1px solid #e3e3e8;
	display: flex;
	gap: 5px;
	flex-direction: column;
	align-items: start;
	justify-content: start;
	border-bottom: 1px solid #e3e3e8;

	& > *:not(:last-child) {
		/* margin-bottom: 20px; */
	}

	${ShoppingCartLink} {
		width: auto;
		padding-left: 0;
		padding-right: 0;
		background: transparent;
	}

	${Phone} {
		span {
			display: block !important;
		}
	}

	${CurrentLocation} {
		span {
			display: block !important;
		}
	}
`;

export const MenuBottom = styled.div`
	padding: 10px 0;
`;

export const MenuNavList = styled.ul`
	list-style: none;
`;

export const MenuNavItem = styled.li`
	padding: 5px 0;
`;

export const MenuNavLink = styled.a`
	padding: 15px 4px;
	margin-top: 10px;
`;
