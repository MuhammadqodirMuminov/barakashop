import { MasterCardIcon, VisaIcon } from '@/assets';

export const payments = [
	{
		label: 'visa',
		icon: <img src={VisaIcon} alt='' />,
	},
	{
		label: 'mastercard',
		icon: <img src={MasterCardIcon} alt='' />,
	},
];

export const navFooter = [
	{
		tag: 'Company Menu',
		items: [
			{ label: 'About us', link: '/' },
			{ label: 'Requisites and information', link: '/' },
			{ label: 'News', link: '/' },
			{ label: 'Careers', link: '/' },
			{ label: 'Suppliers', link: '/' },
			{ label: 'Contacts', link: '/' },
		],
	},
	{
		tag: 'Catalogs',
		items: [
			{ label: 'Original spare parts', link: '/' },
			{ label: 'Non-original spare parts', link: '/' },
			{ label: 'Spare parts', link: '/' },
			{ label: 'Car oils', link: '/' },
			{ label: 'Accumulator', link: '/' },
			{ label: 'Sale', link: '/' },
		],
	},
	{
		tag: 'Help',
		items: [
			{ label: 'FAQ', link: '/' },
			{ label: 'Online consultation', link: '/' },
			{ label: 'Payment', link: '/' },
			{ label: 'Delivery', link: '/' },
			{ label: 'Purchase returns', link: '/' },
			{ label: 'Forgot password', link: '/' },
		],
	},
	{
		tag: 'Products and brands',
		items: [
			{ label: 'List of brands', link: '/' },
			{ label: 'Popular goods', link: '/' },
			{ label: 'Availability', link: '/' },
		],
	},
];
