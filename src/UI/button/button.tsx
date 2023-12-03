import { FC, PropsWithChildren } from 'react';
import { UiDictionary } from '../dictionary';

export const Button: FC<PropsWithChildren> = () => {
	return <div>{UiDictionary.button.text}</div>;
};
