import { FormProvider, useForm } from 'react-hook-form';

import { HeaderBottom, HeaderTop } from './components';

import { NavItem } from './Header.types';

import { ICategory } from '../../../types/category';
import * as S from './Header.styled';

export const Header = ({ category }: any) => {
	const useFormProps = useForm();

	const nav: NavItem[] = category?.map((item: ICategory) => {
		return { label: `${item.title}`, link: `/category/${item.id}`, icon: `${item.categoty_image}` };
	});

	return (
		<FormProvider {...useFormProps}>
			<S.Header>
				<HeaderTop nav={nav} />
				<HeaderBottom nav={nav} />
			</S.Header>
		</FormProvider>
	);
};
