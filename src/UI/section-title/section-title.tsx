import { Box, Image } from '@chakra-ui/react';
import { SectionTitleProps } from './section-title.props';
import { CustomButton, CustomText } from '@/UI';
import { Link } from 'react-router-dom';
import rightArrowIcon from '@public/icons/arrows/right.svg';

export const SectionTitle = ({
    title,
    link,
    link_title,
}: SectionTitleProps) => {
    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            fontWeight={'bold'}
        >
            <CustomText
                fontSize={{
                    base: 12,
                    sm: 15,
                    md: 18,
                    lg: 20,
                    xl: 22,
                }}
            >
                {title}
            </CustomText>
            <Link to={link}>
                <CustomButton
                    p={{
                        base: 2,
                        sm: 5,
                        md: 6,
                    }}
                    color={'#7500d8'}
                    text={link_title ? link_title : title}
                    fontSize={{
                        base: 12,
                        sm: 14,
                        md: 16,
                        lg: 18,
                        xl: 20,
                    }}
                    image={
                        <Image
                            ml={5}
                            src={rightArrowIcon}
                        />
                    }
                />
            </Link>
        </Box>
    );
};
