import filledStarIcon from '@/assets/icons/rating/filled.svg';
import emptyStarIcon from '@/assets/icons/rating/empty.svg';
import { Image } from '@chakra-ui/react';

export function ratingImageGenerate(rating: number): JSX.Element {
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
			{ratingImages.map(item => (
				<Image mr={'2px'} key={item} src={item} alt='rating icon' />
			))}
		</>
	);
}
