import { Card, CardBody, CardHeader } from '@chakra-ui/card';
import { Image } from '@chakra-ui/image';
import { ProductCardProps } from './card.props';
import { BASE_URL } from '../../constants/site.constants';
import noThumbnailImage from '@/assets/img/no-thumbnail.png';
import { Box, Text } from '@chakra-ui/layout';
import filledStarIcon from '@/assets/icons/rating/filled.svg';
import emptyStarIcon from '@/assets/icons/rating/empty.svg';
import basketIcon from '@/assets/icons/shopping-cart.svg';
import { CustomButton } from '../button/button';

export const ProductCard = ({
    id,
    title,
    images,
    rating,
    product_price,
}: ProductCardProps): JSX.Element => {
    const thumbImage = images?.urls[0];
    const ratingImages = ratingImageGenerate(Number(rating));
    return (
        <Card
            w={300}
            _activeLink={`/product/${id}`}
        >
            <CardHeader p={0}>
                <Image
                    h={252}
                    src={
                        thumbImage
                            ? `${BASE_URL}/${thumbImage}`
                            : noThumbnailImage
                    }
                    objectFit={'cover'}
                />
            </CardHeader>

            <CardBody p={'20px'}>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Text
                        color={'grey'}
                        mr={5}
                        fontSize={'small'}
                    >
                        Article: {id}
                    </Text>
                    <Box display={'flex'}>
                        {ratingImages}

                        <Text
                            display={'block'}
                            ml={2}
                            color={'grey'}
                        >
                            {Number.parseFloat(rating).toFixed(1)}
                        </Text>
                    </Box>
                </Box>
                <Text
                    m={0}
                    mt={2}
                    fontSize={'16px'}
                >
                    {title}
                </Text>
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    mt={2}
                >
                    <Text
                        display={'flex'}
                        alignItems={'center'}
                        m={0}
                        fontSize={'30px'}
                    >
                        {product_price}
                        <Text
                            fontSize={16}
                            ml={2}
                        >
                            {' '}
                            s'om
                        </Text>
                    </Text>
                    <CustomButton
                        p={2}
                        border={'2px solid #023581'}
                        bg={'white'}
                        image={
                            <Image
                                color={'#023581'}
                                src={basketIcon}
                            />
                        }
                    />
                </Box>
            </CardBody>
        </Card>
    );
};

function ratingImageGenerate(rating: number): JSX.Element {
    let totalRating: number = 0;
    let ratingImages: string[] = [];

    while (totalRating < 5) {
        if (totalRating < Math.round(rating)) {
            ratingImages.push(filledStarIcon);
            totalRating += 1;
        } else {
            totalRating += 1;
            ratingImages.push(emptyStarIcon);
        }
    }

    return (
        <>
            {ratingImages.map((item) => (
                <Image
                    mr={'2px'}
                    key={item}
                    src={item}
                    alt='rating icon'
                />
            ))}
        </>
    );
}
