import { DeleteIcon } from '@chakra-ui/icons';
import * as S from './styled';
import { Skeleton } from '@chakra-ui/react';
import { oqims as tempOqims } from '@/constants';
import { useActions, useTypedSelector } from '@/hooks';
import { useEffect } from 'react';

export const SellerOqim = () => {
    const state = useTypedSelector((state) => state);
    const { getOneOqimByUserId } = useActions();
    const loading = !state.oqim.loading.getOneByUserId;
    console.log(loading);

    const oqims = loading ? state.oqim.oneOqimByUserId?.oqims : tempOqims;
    const user = state.auth.user;

    useEffect(() => {
        getOneOqimByUserId({ id: user.id });
    }, [user.id]);

    return (
        <S.Main>
            <S.Container>
                <S.Title>Mening havolalarim</S.Title>
                {oqims?.length ? (
                    <S.WrapperList>
                        {oqims?.map(
                            ({
                                oqim_id,
                                oqim_name,
                                oqim_link,
                                product_id,
                                created_at,
                            }) => (
                                <S.Item key={oqim_id}>
                                    <S.Box>
                                        <Skeleton isLoaded={loading}>
                                            <S.Text>{oqim_name}</S.Text>
                                        </Skeleton>
                                        <DeleteIcon
                                            fontSize={'20px'}
                                            color={'red'}
                                        />
                                    </S.Box>
                                    <S.Box>
                                        <Skeleton isLoaded={loading}>
                                            <S.Text>{product_id?.title}</S.Text>
                                        </Skeleton>
                                        <Skeleton
                                            mt={5}
                                            isLoaded={loading}
                                        >
                                            <S.Span>{oqim_link}</S.Span>
                                        </Skeleton>

                                        <Skeleton
                                            mt={5}
                                            isLoaded={loading}
                                        >
                                            <S.Checkbox>
                                                sorovlarni hududsiz qabul qilish
                                            </S.Checkbox>
                                        </Skeleton>
                                        <Skeleton isLoaded={loading}>
                                            <S.Time>{created_at}</S.Time>
                                        </Skeleton>
                                    </S.Box>
                                    <S.Box>
                                        <S.CopyButton
                                            onClick={() =>
                                                navigator.clipboard.writeText(
                                                    oqim_link
                                                )
                                            }
                                        >
                                            Nusha olish
                                        </S.CopyButton>
                                    </S.Box>
                                </S.Item>
                            )
                        )}
                    </S.WrapperList>
                ) : (
                    ''
                )}
                <S.AllOqimTitle>
                    Ko'rsatilgan ma'lumotlar: - jami {oqims?.length}
                </S.AllOqimTitle>
            </S.Container>
        </S.Main>
    );
};
