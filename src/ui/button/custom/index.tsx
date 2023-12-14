import { Button, Text } from '@chakra-ui/react';
import { ButtonProps } from './props';

export const CustomButton = (props: ButtonProps) => {
	return (
		<Button {...props}>
			{props.text ? <Text>{props.text}</Text> : ''}
			{props.image ? { ...props.image } : ''}
		</Button>
	);
};
