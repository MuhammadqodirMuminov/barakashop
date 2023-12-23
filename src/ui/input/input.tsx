import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from '@chakra-ui/react';
import { IInputProps } from './input-props';
import { ErrorMessage, FieldHookConfig, useField } from 'formik';
import InputMask from 'react-input-mask';

export const InputField = ({
    text,
    type,
    placeholder,
    mask,
    ...props
}: IInputProps & FieldHookConfig<string>) => {
    const [field, meta] = useField(props);

    return (
        <FormControl
            isRequired
            isInvalid={!!meta.touched && !!meta.error}
        >
            <FormLabel>{text}</FormLabel>
            {mask ? (
                <InputMask
                    mask='+\9\98 (99) 999 99 99'
                    placeholder={placeholder}
                    {...field}
                >
                    {/* {() => (
                        <Input
                            type={type}
                            placeholder={placeholder}
                            {...props}
                        />
                    )} */}
                </InputMask>
            ) : (
                <Input
                    type={type}
                    placeholder={placeholder}
                    {...field}
                />
            )}
            <FormErrorMessage>
                <ErrorMessage name={field.name} />
            </FormErrorMessage>
        </FormControl>
    );
};
