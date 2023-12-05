import { Text } from '@chakra-ui/react';
import { CustomTextProps } from './text.props';

export const CustomText = (props: CustomTextProps) => {
    return <Text {...props}>{props.children}</Text>;
};
