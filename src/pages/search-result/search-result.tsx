import { Text } from '@chakra-ui/react';
import * as S from './styled';
import { ProductCard } from '@/ui';
import { products } from '@/constants';

const title = 'Samsung';

export const SearchResult = () => {
    return (
        <S.Main>
            <S.Container>
                <S.Wrapper>
                    <Text
                        fontSize={{ sm: 22, md: 24, lg: 28 }}
                        fontStyle={'normal'}
                        variant='h1'
                    >
                        Qidiruvingiz bo'yicha topilgan mahsulotlar: "
                        <Text
                            display={'inline'}
                            fontWeight={'bolder'}
                        >
                            {title}
                        </Text>
                        "
                    </Text>
                </S.Wrapper>
                <S.Line />
                <S.ProductWrapper>
                    {products.length ? (
                        products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))
                    ) : (
                        <S.NoProductText>
                            Sizning qidiruvingiz bo'yicha mahsulot topilmadi 🧐!
                        </S.NoProductText>
                    )}
                </S.ProductWrapper>
            </S.Container>
        </S.Main>
    );
};
