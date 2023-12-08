import { navFooter, payments } from '@/constants';
import * as S from './styled';

import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Footer = () => {
	const navColumns = navFooter.map(({ tag, items }) => {
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

					<S.TopRight>
						<S.Consultation>
							<Link to='/'>
								<S.ConsultationLink>
									<svg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M1.979 4.725c.242-1.404 1.358-2.436 2.766-2.65 1.35-.206 3.2-.408 5.254-.408 2.054 0 3.905.202 5.255.407 1.408.215 2.524 1.247 2.766 2.65.168.98.313 2.222.313 3.61 0 1.387-.145 2.63-.313 3.608-.242 1.404-1.358 2.436-2.766 2.65a35.73 35.73 0 0 1-4.735.404l-5.096 3.011a.833.833 0 0 1-1.257-.717v-2.837c-1.128-.375-1.98-1.306-2.187-2.511a21.416 21.416 0 0 1-.313-3.609c0-1.387.144-2.63.313-3.608Zm3.02 1.942c0-.46.373-.834.834-.834h8.333a.833.833 0 1 1 0 1.667H5.833a.833.833 0 0 1-.834-.833ZM5 10c0-.46.373-.833.834-.833h3.333a.833.833 0 0 1 0 1.666H5.833A.833.833 0 0 1 4.999 10Z'
											fill='#fff'
										></path>
									</svg>

									<span>
										<span>Online consultation</span>
										<span>Ask questions</span>
									</span>
								</S.ConsultationLink>
							</Link>

							<S.ConsultationStatus>
								<S.ConsultationIndicator />

								<Text>Service is running normally</Text>
							</S.ConsultationStatus>
						</S.Consultation>

						{docs}
					</S.TopRight>
				</S.Top>

				<S.Bottom>
					<Text>Copyright © ООО «Blabla.bla» 2023. All rights reserved.</Text>

					<S.PaymentAccept>
						<Text>Accept for payment</Text>

						<S.PaymentServices>{paymentItems}</S.PaymentServices>
					</S.PaymentAccept>

					{docs}
				</S.Bottom>
			</S.Wrapper>
		</S.Footer>
	);
};
