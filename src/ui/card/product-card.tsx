import { Image } from '@chakra-ui/react';
import { ICategoryCardProps } from './category-card-props';
import { Box } from '@chakra-ui/layout';
import { CustomButton, CustomText } from '@/ui';
import { CategoryCardBox, CategoryImage } from './category-card-styled';
import { Link } from 'react-router-dom';
import ArrowIcon from '@/assets/icons/arrows/white-arrow.svg';
import CategoryThumb from '@/assets/img/placeholders/product.png';

export const CategoryCard = ({ category }: ICategoryCardProps) => {
    const { id, title, categoty_image } = category;

    return (
        <CategoryCardBox>
            <Box>
                <CustomText
                    fontSize={{
                        base: 14,
                        sm: 16,
                        md: 20,
                        lg: 22,
                        xl: 24,
                    }}
                    fontWeight={'bold'}
                    w={'100%'}
                    maxW={{
                        base: '150px',
                    }}
                >
                    {title}
                </CustomText>
                <CustomText>
                    <Link to={`/category/${id}`}>
                        <CustomButton
                            mt={8}
                            bgColor={'#023581'}
                            color={'#ffffff'}
                            fontSize={{
                                base: 12,
                                sm: 14,
                                md: 16,
                            }}
                            text='Visit'
                            _hover={{
                                bgColor: '#023581d4',
                            }}
                            image={
                                <Image
                                    ml={4}
                                    src={ArrowIcon}
                                />
                            }
                        />
                    </Link>
                </CustomText>
            </Box>
            <CategoryImage
                src={categoty_image ? categoty_image : CategoryThumb}
            />
        </CategoryCardBox>
    );
};
