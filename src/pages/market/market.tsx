import { SearchIcon } from '@chakra-ui/icons';
import * as S from './styled';
import { BASE_URL, categories, products } from '@/constants';
import {
    Button,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
} from '@chakra-ui/react';
import noThumbnailImage from '@/assets/img/no-thumbnail.png';

export const SellerMarket = () => {
    return (
        <S.Main>
            <S.Container>
                <S.Title>Hozirda sotuvda bor mahsulotlar</S.Title>
                <InputGroup my={8}>
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon color='gray.300' />
                    </InputLeftElement>
                    <Input
                        type='tel'
                        placeholder='Mahsulotni qidiring'
                    />
                    <InputRightElement w={70}>
                        <Button
                            size={'sm'}
                            bgColor={'#007ee7'}
                            color={'#ffffff'}
                            _hover={{
                                opacity: 0.7,
                            }}
                        >
                            Izlash
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <S.CategoryWrapper>
                    {categories.map(({ label, link, icon }) => (
                        <S.CategoryItem key={link}>
                            {icon} {label.split(' ')[0]}
                        </S.CategoryItem>
                    ))}
                </S.CategoryWrapper>
                {products.length ? (
                    <S.WrapperList>
                        {products.map(
                            ({ id, product_price, title, images, count }) => (
                                <S.Item key={id}>
                                    <S.Box>
                                        <Image
                                            src={
                                                images.urls[0]
                                                    ? `${BASE_URL}/${images.urls[0]}`
                                                    : noThumbnailImage
                                            }
                                        />
                                    </S.Box>
                                    <S.Box>
                                        <S.Text>{title}</S.Text>
                                        {product_price} so'm
                                    </S.Box>
                                    <S.Box>
                                        <S.Text>To'lov</S.Text>
                                        {product_price}
                                    </S.Box>
                                    <S.Box>
                                        Sotuvchi
                                        <S.LinkItem to={'/'}>
                                            Sportshop
                                        </S.LinkItem>
                                    </S.Box>
                                    <S.Box>
                                        <S.Text>Zaxirada</S.Text>
                                        {count ? count : 0}
                                    </S.Box>
                                    <S.Box>
                                        <S.Text>Operator:</S.Text>
                                        Yo'q
                                    </S.Box>
                                    <S.Box>
                                        <S.Text>👉 Reklama posti</S.Text>
                                    </S.Box>
                                    <S.Box>
                                        <S.CreateOqimButton>
                                            Oqim yasash
                                        </S.CreateOqimButton>
                                    </S.Box>
                                </S.Item>
                            )
                        )}
                    </S.WrapperList>
                ) : (
                    ''
                )}
                <S.AllOqimTitle>
                    Ko'rsatilgan ma'lumotlar: - jami {products.length}
                </S.AllOqimTitle>
            </S.Container>
        </S.Main>
    );
};
