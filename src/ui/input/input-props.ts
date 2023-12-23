import { InputProps } from '@chakra-ui/react';

export interface IInputProps extends InputProps {
    type: string;
    text: string;
    placeholder: string;
    mask?: boolean;
}
