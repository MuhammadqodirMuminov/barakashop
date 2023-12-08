import { ICategory } from '@/types';
import { Card, CardBody, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import noThumbnailImage from '@/assets/img/placeholders/product.png';
import categoryThumb from '@/assets/img/placeholders/first-slider.png';
import { BASE_URL } from '@/constants';
import { CustomText } from '@/ui';

export const FirstSlider = ({ category }: { category: ICategory }) => {
    const { id, title, categoty_image } = category;
    return (
        <Card
            w={'300px'}
            h={'410px'}
            p={'20px'}
            maxH={'410px'}
            backgroundPosition={'center bottom'}
            backgroundSize={'cover'}
            bgRepeat={'no-repeat'}
            bgImage={categoryThumb}
            objectFit={'cover'}
        >
            <Link to={`/category/${id}`}>
                <CardBody p={0}>
                    <CustomText
                        fontSize={{
                            base: 12,
                            sm: 15,
                            md: 18,
                            lg: 20,
                            xl: 22,
                        }}
                        color={'#ffffff'}
                        fontWeight={'bold'}
                    >
                        {title}
                    </CustomText>
                    <Image
                        h={252}
                        src={
                            categoty_image
                                ? `${BASE_URL}/${categoty_image}`
                                : noThumbnailImage
                        }
                        objectFit={'cover'}
                    />
                </CardBody>
            </Link>
        </Card>
    );
};
