import React, { HtmlHTMLAttributes } from 'react';

export const Content = ({ children }: React.PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>) => {
	return <div>{children}</div>;
};
