import { CategoryCard, SectionTitle } from '@/ui';

export const Home = () => {
	return (
		<div>
			<SectionTitle title='Recommend' link='/salom' link_title='hello' />
			<CategoryCard category={{id: 1, categoty_image: '', title: 'Electronic', description: ''}}/>
		</div>
	);
};
