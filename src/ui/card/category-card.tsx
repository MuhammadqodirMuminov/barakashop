import { Image } from '@chakra-ui/react';
import { ICategoryCardProps } from './category-card-props';
import { Box } from '@chakra-ui/layout';
import { CustomButton, CustomText } from '@/ui';
import CategoryBgi from '@/assets/img/placeholders/category-bg.png';

export const CategoryCard = ({ category }: ICategoryCardProps) => {
    const { id, title, categoty_image } = category;

    return (
        <Box
            display={'flex'}
            bgImage={CategoryBgi}
        >
            <Box>
                <CustomText>{title}</CustomText>
                <CustomText>
                    <CustomButton
                        text='Visit'
                        image={<Image src='' />}
                    />
                </CustomText>
            </Box>
            <Image src='' />
        </Box>
    );
};
