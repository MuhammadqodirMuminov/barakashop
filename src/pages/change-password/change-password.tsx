import { LockIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import * as S from './styled';

export const SellerProfileChangePassword = () => {
	return (
		<S.Wrapper>
			<S.Box>
				<S.Title>Shaxsiy Parolni O‘zgartirish</S.Title>
				<S.Span>
					<LockIcon />
				</S.Span>

				<Stack spacing={4}>
					<InputGroup>
						<InputLeftElement pointerEvents='none'>
							<LockIcon />
						</InputLeftElement>
						<Input type='password' placeholder='********' />
					</InputGroup>
					<InputGroup>
						<InputLeftElement pointerEvents='none'>
							<LockIcon />
						</InputLeftElement>
						<Input type='password' placeholder='********' />
					</InputGroup>
					<S.Button>So'rov yuborish</S.Button>
				</Stack>
			</S.Box>
		</S.Wrapper>
	);
};
