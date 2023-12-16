import { DeleteIcon } from '@chakra-ui/icons';
import * as S from './styled';
import { IOqim } from '@/types/oqim-types';
import { products } from '@/constants';

const oqims: IOqim[] = [
    {
        oqim_id: 1,
        oqim_name: 'Avtonashina',
        oqim_link: 'https://100k.uz/oqim/363040',
        created_at: '2023-20-10',
        product_id: products[0],
    },
];

export const SellerOqim = () => {
    const handleCopy = (link: string) => {
        navigator.clipboard.writeText(link);
    };

    return (
        <S.Main>
            <S.Container>
                <S.Title>Mening havolalarim</S.Title>
                {oqims.length ? (
                    <S.WrapperList>
                        {oqims.map(
                            ({
                                oqim_id,
                                oqim_name,
                                oqim_link,
                                product_id,
                                created_at,
                            }) => (
                                <S.Item key={oqim_id}>
                                    <S.Box>
                                        <S.Text>{oqim_name}</S.Text>
                                        <DeleteIcon
                                            fontSize={'20px'}
                                            color={'red'}
                                        />
                                    </S.Box>
                                    <S.Box>
                                        <S.Text>{product_id?.title}</S.Text>
                                        <S.Span>{oqim_link}</S.Span>
                                        <S.Checkbox>
                                            sorovlarni hududsiz qabul qilish
                                        </S.Checkbox>
                                        <S.Time>{created_at}</S.Time>
                                    </S.Box>
                                    <S.Box>
                                        <S.CopyButton
                                            onClick={() =>
                                                handleCopy(oqim_link)
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
                    Ko'rsatilgan ma'lumotlar: - jami {oqims.length}
                </S.AllOqimTitle>
            </S.Container>
        </S.Main>
    );
};
