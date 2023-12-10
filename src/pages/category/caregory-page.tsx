import * as S from './styled';
import { BASE_URL, products } from '@/constants';
import { ICategory } from '@/types';
import { ProductCard } from '@/ui';
import { Image, Text } from '@chakra-ui/react';
import noThumbnailImage from '@/assets/img/no-thumbnail.png';

export const CaregoryPage = () => {
    const category: ICategory = {
        id: 1,
        title: 'Electronics',
        categoty_image: '',
        description: 'Sizga kerakli hamma narsa bizda bor',
        products,
    };
    const { title, categoty_image, description } = category;
    return (
        <S.Main>
            <S.Container>
                <S.Wrapper>
                    <Image
                        w={'100%'}
                        h={'100%'}
                        maxW={'60px'}
                        maxH={'60px'}
                        mr={'5px'}
                        src={categoty_image ? `${BASE_URL}/${categoty_image}` : noThumbnailImage}
                        objectFit={'cover'}
                    />
                    <Text
                        fontSize={{ sm: 22, md: 24, lg: 28 }}
                        fontStyle={'normal'}
                        fontWeight={'bolder'}
                        variant='h1'
                    >
                        {title} ({products.length})
                    </Text>
                </S.Wrapper>
                <Text>{description}</Text>

                <S.ProductWrapper>
                    {products.map((item) => (
                        <ProductCard product={item} />
                    ))}
                </S.ProductWrapper>
            </S.Container>
        </S.Main>
    );
};
