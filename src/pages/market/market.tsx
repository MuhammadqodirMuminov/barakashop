import { SearchIcon } from '@chakra-ui/icons';
import * as S from './styled';
import { BASE_URL, categories as tempCategories, products } from '@/constants';
import {
    Button,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Skeleton,
} from '@chakra-ui/react';
import noThumbnailImage from '@/assets/img/no-thumbnail.png';
import { Link } from 'react-router-dom';
import { useActions, useTypedSelector } from '@/hooks';
import { useEffect, useState } from 'react';
import { UiModal } from '@/ui/modal/modal';
import { CustomButton, InputField } from '@/ui';
import { Form, Formik, FormikValues } from 'formik';
import { CreateOqim } from '@/validations';
import { IProductCard } from '@/types';
import { addNotification } from '@/utils';

export const SellerMarket = () => {
    const state = useTypedSelector((state) => state);
    const { getOnSaleProduct, getAllCategory, createOqim, setSelectProduct } =
        useActions();
    const loading = !state.product.loading.getOnSale;
    const categoryLoading = !state.category.loading.get;
    const createOqimLoading = state.oqim.loading.create;
    const [open, setOpen] = useState(false);

    const onSaleProducts = loading
        ? state.product.onSaleProducts
        : products.slice(0, 4);

    const categories = categoryLoading
        ? state.category.categories
        : tempCategories;

    useEffect(() => {
        getOnSaleProduct({ page: 1, limit: 10 });
        getAllCategory({});
    }, []);

    const handleOpenModal = (product: IProductCard) => {
        setOpen(true);
        setSelectProduct(product);
    };

    const initialValues = {
        oqim_name: '',
    };

    const handleCreateOqim = async ({ oqim_name }: FormikValues) => {
        try {
            const response = await createOqim({
                product_id: Number(state.product.selectProduct?.id),
                admin_danat: `min: 100so'm - max: 5000 so'm`,
                oqim_name,
                user_id: state.auth.user?.id,
            });

            if (response?.payload?.data) {
                addNotification('Oqim successfully created');
                setOpen(false);
            }
        } catch (error) {
            addNotification(error);
        }
    };

    return (
        <S.Main>
            <S.Container>
                <S.Title>Hozirda sotuvda bor mahsulotlar</S.Title>
                <InputGroup my={8}>
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon color='gray.300' />
                    </InputLeftElement>
                    <Input
                        type='text'
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
                    {categories?.map(({ id, title, categoty_image }) => (
                        <Skeleton
                            isLoaded={categoryLoading}
                            borderRadius={'10px'}
                            key={id}
                        >
                            <Link to={`/category/${id}`}>
                                <S.CategoryItem>
                                    <Image
                                        src={`${BASE_URL}/uploads/${categoty_image}`}
                                        alt={title}
                                    />{' '}
                                    {title.split(' ')[0]}
                                </S.CategoryItem>
                            </Link>
                        </Skeleton>
                    ))}
                </S.CategoryWrapper>
                {onSaleProducts?.length ? (
                    <S.WrapperList>
                        {onSaleProducts?.map((product) => (
                            <S.Item key={product.id}>
                                <Skeleton
                                    borderTopRadius={'3px'}
                                    isLoaded={loading}
                                >
                                    <Image
                                        w={'100%'}
                                        h={'160px'}
                                        objectFit={'cover'}
                                        borderBottom={'1px solid #dfdfdf'}
                                        src={
                                            product.images.urls[0]
                                                ? `${BASE_URL}/uploads/${product.images.urls[0]}`
                                                : noThumbnailImage
                                        }
                                    />
                                </Skeleton>
                                <S.Box>
                                    <Skeleton isLoaded={loading}>
                                        <S.Text>{product.title}</S.Text>
                                    </Skeleton>
                                    <Skeleton isLoaded={loading}>
                                        {product.product_price} so'm
                                    </Skeleton>
                                </S.Box>
                                <S.Box>
                                    <Skeleton isLoaded={loading}>
                                        <S.Text>To'lov</S.Text>
                                    </Skeleton>
                                    <Skeleton isLoaded={loading}>
                                        {product.product_price}
                                    </Skeleton>
                                </S.Box>
                                <S.Box>
                                    <Skeleton isLoaded={loading}>
                                        Sotuvchi
                                    </Skeleton>
                                    <Skeleton isLoaded={loading}>
                                        <S.LinkItem to={'/'}>
                                            Sportshop
                                        </S.LinkItem>
                                    </Skeleton>
                                </S.Box>
                                <S.Box>
                                    <Skeleton isLoaded={loading}>
                                        <S.Text>Zaxirada</S.Text>
                                    </Skeleton>
                                    <Skeleton isLoaded={loading}>
                                        {product.count ? product.count : 0}
                                    </Skeleton>
                                </S.Box>
                                <S.Box>
                                    <Skeleton isLoaded={loading}>
                                        <S.Text>Operator:</S.Text>
                                    </Skeleton>
                                    <Skeleton isLoaded={loading}>Yo'q</Skeleton>
                                </S.Box>
                                <S.Box>
                                    <Skeleton isLoaded={loading}>
                                        <S.Text>👉 Reklama posti</S.Text>
                                    </Skeleton>
                                </S.Box>
                                <S.Box>
                                    <S.CreateOqimButton
                                        type='button'
                                        onClick={() => handleOpenModal(product)}
                                    >
                                        Oqim yasash
                                    </S.CreateOqimButton>
                                </S.Box>
                            </S.Item>
                        ))}
                    </S.WrapperList>
                ) : (
                    <h2>Mahsulotlar mavjud emas</h2>
                )}
                <S.AllOqimTitle>
                    Ko'rsatilgan ma'lumotlar: - jami {products.length}
                </S.AllOqimTitle>
            </S.Container>
            <UiModal
                isOpen={open}
                title={'Oqim yasash'}
                onClose={() => setOpen(false)}
                closeTitle='Close'
            >
                <Formik
                    onSubmit={handleCreateOqim}
                    initialValues={initialValues}
                    validationSchema={CreateOqim}
                >
                    <Form>
                        <InputField
                            text='Oqim nomi'
                            name='oqim_name'
                            type='text'
                            placeholder='Oqim nomini kiriting'
                        />
                        <CustomButton
                            text='Oqim yasash'
                            isLoading={createOqimLoading}
                            type='submit'
                            bg={'blue.400'}
                            color={'white'}
                            mt={5}
                            _hover={{
                                bg: 'blue.500',
                            }}
                        />
                    </Form>
                </Formik>
            </UiModal>
        </S.Main>
    );
};
