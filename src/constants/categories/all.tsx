import { CanisterIcon, CarGarageIcon, EngineIcon, FrontDoorIcon, GlassWasherIcon, SafetyBeltIcon } from '@/assets';
import { NavItem } from '@/layouts/user-layout/header/types';

export const categories = [
	{
		label: 'Non-original spare parts',
		link: '/',
		icon: <img src={EngineIcon} alt='' />,
	},
	{
		label: 'Body parts',
		link: '/',
		icon: <img src={CarGarageIcon} alt='' />,
	},
	{
		label: 'Spare parts',
		link: '/',
		icon: <img src={FrontDoorIcon} alt='' />,
	},
	{
		label: 'Auto glass',
		link: '/',
		icon: <img src={SafetyBeltIcon} alt='' />,
	},
	{
		label: 'Car oils',
		link: '/',
		icon: <img src={GlassWasherIcon} alt='' />,
	},
	{
		label: 'Autochemistry',
		link: '/',
		icon: <img src={CanisterIcon} alt='' />,
	},
];
export const nav: NavItem[] = [
	{ label: 'Car oils', link: '/' },
	{ label: 'Original spare parts', link: '/' },
	{ label: 'Non-original spare parts', link: '/' },
	{ label: 'Autolamps', link: '/' },
	{ label: 'Wheels', link: '/' },
	{ label: 'Accumulator', link: '/' },
	{ label: 'Contacts', link: '/' },
];
