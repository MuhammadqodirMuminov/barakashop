import Typography from '@mui/material/Typography';

import * as S from './Footer.styled';

import ArrowRightIcon from 'public/icons/arrows/sign-right.svg';
import ChatIcon from 'public/icons/chat.svg';

import MasterCardIcon from 'public/icons/payments/mastercard.svg';
import VisaIcon from 'public/icons/payments/visa.svg';
import { Link } from 'react-router-dom';

export const Footer = () => {
	const nav = [
		{
			tag: 'Company Menu',
			items: [
				{ label: 'About us', link: '/' },
				{ label: 'Requisites and information', link: '/' },
				{ label: 'News', link: '/' },
				{ label: 'Careers', link: '/' },
				{ label: 'Suppliers', link: '/' },
				{ label: 'Contacts', link: '/' },
			],
		},
		{
			tag: 'Catalogs',
			items: [
				{ label: 'Original spare parts', link: '/' },
				{ label: 'Non-original spare parts', link: '/' },
				{ label: 'Spare parts', link: '/' },
				{ label: 'Car oils', link: '/' },
				{ label: 'Accumulator', link: '/' },
				{ label: 'Sale', link: '/' },
			],
		},
		{
			tag: 'Help',
			items: [
				{ label: 'FAQ', link: '/' },
				{ label: 'Online consultation', link: '/' },
				{ label: 'Payment', link: '/' },
				{ label: 'Delivery', link: '/' },
				{ label: 'Purchase returns', link: '/' },
				{ label: 'Forgot password', link: '/' },
			],
		},
		{
			tag: 'Products and brands',
			items: [
				{ label: 'List of brands', link: '/' },
				{ label: 'Popular goods', link: '/' },
				{ label: 'Availability', link: '/' },
			],
		},
	];

	const payments = [
		{ label: 'visa', icon: <VisaIcon /> },
		{ label: 'mastercard', icon: <MasterCardIcon /> },
	];

	const navColumns = nav.map(({ tag, items }) => {
		const navItems = items.map(({ label, link }) => {
			return (
				<S.NavItem key={label}>
					<Link to={link}>{label}</Link>
				</S.NavItem>
			);
		});

		return (
			<S.NavColumn key={tag}>
				<S.NavTag>{tag}</S.NavTag>

				<S.NavList>{navItems}</S.NavList>
			</S.NavColumn>
		);
	});

	const paymentItems = payments.map(({ label, icon }) => {
		return <S.PaymentItem key={label}>{icon}</S.PaymentItem>;
	});

	const navAccordionItems = nav.map(({ tag, items }) => {
		const navItems = items.map(({ label, link }) => {
			return (
				<S.NavItem key={label} as='div'>
					<Link to={link}>{label}</Link>
				</S.NavItem>
			);
		});

		return (
			<S.NavAccordion key={tag}>
				<S.NavAccordionSummary expandIcon={<ArrowRightIcon />}>
					<S.NavTag>{tag}</S.NavTag>
				</S.NavAccordionSummary>

				<S.NavAccordionDetails>{navItems}</S.NavAccordionDetails>
			</S.NavAccordion>
		);
	});

	const docs = (
		<S.Documents>
			<Link to='/'>Privacy</Link>
			<Link to='/'>Confidentiality</Link>
		</S.Documents>
	);

	return (
		<S.Footer>
			<S.Wrapper>
				<S.Top>
					{navColumns}

					<S.NavAccordionContainer>{navAccordionItems}</S.NavAccordionContainer>

					<S.TopRight>
						<S.Consultation>
							<Link to='/'>
								<S.ConsultationLink>
									<ChatIcon />

									<span>
										<span>Online consultation</span>
										<span>Ask questions</span>
									</span>
								</S.ConsultationLink>
							</Link>

							<S.ConsultationStatus>
								<S.ConsultationIndicator />

								<Typography>Service is running normally</Typography>
							</S.ConsultationStatus>
						</S.Consultation>

						{docs}
					</S.TopRight>
				</S.Top>

				<S.Bottom>
					<Typography>Copyright © ООО «Blabla.bla» 2023. All rights reserved.</Typography>

					<S.PaymentAccept>
						<Typography>Accept for payment</Typography>

						<S.PaymentServices>{paymentItems}</S.PaymentServices>
					</S.PaymentAccept>

					{docs}
				</S.Bottom>
			</S.Wrapper>
		</S.Footer>
	);
};
