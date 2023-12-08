import { Box } from '@chakra-ui/react';
import * as S from './styled';
import { ICategory, IProductCard } from '@/types';
import { CategorySlider, ProductSlider } from '@/components';

export const Home = () => {
    const products: IProductCard[] = [
        {
            id: 1,
            title: 'Iphone 16 Pro Max',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.',
            product_price: '1000',
            images: {
                id: 1,
                urls: [],
                description: 'Lorem ipsum dolor sit amet, consectet',
            },
            rating: '4.3',
        },
        {
            id: 2,
            title: 'Macbook 16 Pro Max',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.',
            product_price: '3000',
            images: {
                id: 1,
                urls: [],
                description: 'Lorem ipsum dolor sit amet, consectet',
            },
            rating: '3.3',
        },
        {
            id: 3,
            title: 'Artel Xalq tanlovi',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.',
            product_price: '1000',
            images: {
                id: 1,
                urls: [],
                description: 'Lorem ipsum dolor sit amet, consectet',
            },
            rating: '1.3',
        },
    ];

    const categories: ICategory[] = [
        {
            id: 1,
            title: 'Laptops',
            categoty_image: '',
        },
        {
            id: 2,
            title: 'Phones',
            categoty_image: '',
        },
        {
            id: 3,
            title: 'Electronics',
            categoty_image: '',
        },

        {
            id: 4,
            title: 'Books',
            categoty_image: '',
        },
    ];

    return (
        <>
            <S.Main>
                <S.Top>
                    <S.Wrapper>Ads Slider for this</S.Wrapper>
                </S.Top>

                <S.Sections>
                    <S.Wrapper>
                        <Box>
                            <ProductSlider
                                category={{
                                    id: 1,
                                    title: 'Lorem ipsum dolor sit amet, consectet',
                                    categoty_image: '',
                                }}
                                items={products}
                            />
                        </Box>
                        <Box mt={10}>
                            <CategorySlider items={categories} />
                        </Box>
                    </S.Wrapper>
                </S.Sections>
            </S.Main>
        </>
    );
};
