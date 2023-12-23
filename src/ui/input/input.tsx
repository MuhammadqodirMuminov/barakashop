import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { ErrorMessage, FieldHookConfig, useField } from 'formik';
import InputMask from 'react-input-mask';
import { IInputProps } from './input-props';

export const InputField = ({ text, type, placeholder, mask, ...props }: IInputProps & FieldHookConfig<string>) => {
	const [field, meta] = useField(props);

	return (
		<FormControl isRequired isInvalid={!!meta.touched && !!meta.error}>
			<FormLabel>{text}</FormLabel>
			{mask ? (
				<InputMask style={{ width: '300px', border: '1px solid blue', padding: '10px', borderRadius: '6px' }} mask='+\9\98 (99) 999 99 99' placeholder={placeholder} {...field}></InputMask>
			) : (
				<Input type={type} placeholder={placeholder} {...field} />
			)}
			<FormErrorMessage>
				<ErrorMessage name={field.name} />
			</FormErrorMessage>
		</FormControl>
	);
};
