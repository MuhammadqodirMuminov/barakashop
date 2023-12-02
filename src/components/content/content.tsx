import React, { HtmlHTMLAttributes } from 'react';
import * as S from './content.styled';

export const Content = ({ children }: React.PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>) => {
	return (
		<div>
			<S.ContentStyle>{children}</S.ContentStyle>
		</div>
	);
};
