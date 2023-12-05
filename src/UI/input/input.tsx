import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { FC } from 'react';
import { IInputProps } from './input.props';

export const InputField: FC<IInputProps> = ({ text, type, props }) => {
	return (
		<FormControl id={type}>
			<FormLabel>{text}</FormLabel>
			<Input type={type} {...props} />
		</FormControl>
	);
};
