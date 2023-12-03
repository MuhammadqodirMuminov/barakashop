import { Heading, Stack } from '@chakra-ui/react';
import { IPageTitle } from './page-title.props';

export const PageTitle = ({ text, fonstSize = '4xl', position = 'center' }: IPageTitle) => {
	return (
		<Stack align={position}>
			<Heading fontSize={fonstSize}>{text}</Heading>
		</Stack>
	);
};
