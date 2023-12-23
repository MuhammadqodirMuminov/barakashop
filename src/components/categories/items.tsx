import { categories } from '@/constants';
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import * as S from './styled';



export const categoriesItems = categories.map(({ label, link, icon }) => {
	return (
		<S.CategoryItem key={label}>
			<Link to={link}>
				<S.CategoryLink>
					<S.CategoryItemIcon>{icon}</S.CategoryItemIcon>
					<Text>{label}</Text>
				</S.CategoryLink>
			</Link>
		</S.CategoryItem>
	);
});
