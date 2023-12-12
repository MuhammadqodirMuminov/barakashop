export const CounterPlus = () => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='black' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'>
			<line x1='12' y1='5' x2='12' y2='19'></line>
			<line x1='5' y1='12' x2='19' y2='12'></line>
		</svg>
	);
};
export const CounterMinus = () => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='black' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'>
			<line x1='5' y1='12' x2='19' y2='12'></line>
		</svg>
	);
};

export function SliderMuskBg() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' fill='none' viewBox='0 0 1260 420'>
			<mask id='mask0' style={{ maskType: 'alpha' }} width='1260' height='420' x='0' y='0' maskUnits='userSpaceOnUse'>
				<rect width='1260' height='420' fill='#4A4356' rx='30'></rect>
			</mask>
			<g mask='url(#mask0)'>
				<path fill='url(#pattern0)' d='M0 0H1259V420H0z' opacity='0.01'></path>
				<circle cx='1047' cy='181' r='178.5' stroke='#5946D7' strokeWidth='341' opacity='0.1'></circle>
				<circle cy='-11' r='201' stroke='#FB6019' strokeWidth='80' opacity='0.1'></circle>
				<path stroke='#FB6019' strokeWidth='50' d='M322-11a322.003 322.003 0 01-114.715 246.408M174.725 259.472a321.995 321.995 0 01-269.224 37.349' opacity='0.1'></path>
				<path stroke='#FB6019' strokeWidth='20' d='M618.603 333.521a37.023 37.023 0 01-51.726 8.082 37.019 37.019 0 01-8.082-51.727' opacity='0.3'></path>
				<g filter='url(#filter0_f)' opacity='0.2'>
					<ellipse cx='902' cy='210.5' fill='#fff' rx='234' ry='164.5'></ellipse>
				</g>
			</g>
			<defs>
				<pattern id='pattern0' width='0.318' height='0.952' patternContentUnits='objectBoundingBox'>
					<use transform='scale(.0008 .00238)' xlinkHref='#image0'></use>
				</pattern>
				<filter id='filter0_f' width='796' height='657' x='504' y='-118' colorInterpolationFilters='sRGB' filterUnits='userSpaceOnUse'>
					<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
					<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape'></feBlend>
					<feGaussianBlur result='effect1_foregroundBlur' stdDeviation='82'></feGaussianBlur>
				</filter>
			</defs>
		</svg>
	);
}

export function SliderMaskTabletBg() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' height='230' fill='none' viewBox='0 0 728 230'>
			<mask id='mask0_448_9875' style={{ maskType: 'alpha' }} width='100%' height='230' x='0' y='0' maskUnits='userSpaceOnUse'>
				<rect width='100%' height='230' fill='#4A4356' rx='30'></rect>
			</mask>
			<g mask='url(#mask0_448_9875)'>
				<rect width='100%' height='230' fill='url(#pattern0)' opacity='0.01'></rect>
				<g opacity='0.1'>
					<mask id='path-3-inside-1_448_9875' fill='#fff'>
						<ellipse cx='697.5' cy='198' rx='250.5' ry='251'></ellipse>
					</mask>
					<path
						fill='#2E1066'
						d='M697 198c0 .197-.01.311-.014.353-.004.043-.006.043.001.009a1.43 1.43 0 01.086-.274c.033-.079.051-.1.031-.071a1.206 1.206 0 01-.216.235l-.035.027c.001-.001.067-.045.21-.106a2.735 2.735 0 01.639-.179c.007-.001-.056.006-.202.006v502c277.442 0 501.5-225.225 501.5-502H697zm.5 0c-.146 0-.209-.007-.202-.006a2.735 2.735 0 01.639.179c.143.061.209.105.21.106l-.035-.027a1.181 1.181 0 01-.216-.235c-.02-.029-.002-.008.031.071.039.09.07.193.086.274.007.034.005.034.001-.009A3.663 3.663 0 01698 198H196c0 276.775 224.058 502 501.5 502V198zm.5 0c0-.197.01-.311.014-.353.004-.043.006-.043-.001-.009a1.43 1.43 0 01-.086.274c-.033.079-.051.1-.031.071a1.206 1.206 0 01.251-.262 1.347 1.347 0 01-.21.106 2.735 2.735 0 01-.639.179c-.007.001.056-.006.202-.006v-502C420.058-304 196-78.775 196 198h502zm-.5 0c.146 0 .209.007.202.006a2.735 2.735 0 01-.639-.179 1.347 1.347 0 01-.21-.106l.035.027a1.181 1.181 0 01.216.235c.02.029.002.008-.031-.071a1.43 1.43 0 01-.086-.274c-.007-.034-.005-.034-.001.009.004.042.014.156.014.353h502c0-276.775-224.058-502-501.5-502v502z'
						mask='url(#path-3-inside-1_448_9875)'
					></path>
					<path
						fill='#410F9E'
						d='M697 198c0 .197-.01.311-.014.353-.004.043-.006.043.001.009a1.43 1.43 0 01.086-.274c.033-.079.051-.1.031-.071a1.206 1.206 0 01-.216.235l-.035.027c.001-.001.067-.045.21-.106a2.735 2.735 0 01.639-.179c.007-.001-.056.006-.202.006v502c277.442 0 501.5-225.225 501.5-502H697zm.5 0c-.146 0-.209-.007-.202-.006a2.735 2.735 0 01.639.179c.143.061.209.105.21.106l-.035-.027a1.181 1.181 0 01-.216-.235c-.02-.029-.002-.008.031.071.039.09.07.193.086.274.007.034.005.034.001-.009A3.663 3.663 0 01698 198H196c0 276.775 224.058 502 501.5 502V198zm.5 0c0-.197.01-.311.014-.353.004-.043.006-.043-.001-.009a1.43 1.43 0 01-.086.274c-.033.079-.051.1-.031.071a1.206 1.206 0 01.251-.262 1.347 1.347 0 01-.21.106 2.735 2.735 0 01-.639.179c-.007.001.056-.006.202-.006v-502C420.058-304 196-78.775 196 198h502zm-.5 0c.146 0 .209.007.202.006a2.735 2.735 0 01-.639-.179 1.347 1.347 0 01-.21-.106l.035.027a1.181 1.181 0 01.216.235c.02.029.002.008-.031-.071a1.43 1.43 0 01-.086-.274c-.007-.034-.005-.034-.001.009.004.042.014.156.014.353h502c0-276.775-224.058-502-501.5-502v502z'
						mask='url(#path-3-inside-1_448_9875)'
					></path>
					<path
						fill='#453888'
						d='M697 198c0 .197-.01.311-.014.353-.004.043-.006.043.001.009a1.43 1.43 0 01.086-.274c.033-.079.051-.1.031-.071a1.206 1.206 0 01-.216.235l-.035.027c.001-.001.067-.045.21-.106a2.735 2.735 0 01.639-.179c.007-.001-.056.006-.202.006v502c277.442 0 501.5-225.225 501.5-502H697zm.5 0c-.146 0-.209-.007-.202-.006a2.735 2.735 0 01.639.179c.143.061.209.105.21.106l-.035-.027a1.181 1.181 0 01-.216-.235c-.02-.029-.002-.008.031.071.039.09.07.193.086.274.007.034.005.034.001-.009A3.663 3.663 0 01698 198H196c0 276.775 224.058 502 501.5 502V198zm.5 0c0-.197.01-.311.014-.353.004-.043.006-.043-.001-.009a1.43 1.43 0 01-.086.274c-.033.079-.051.1-.031.071a1.206 1.206 0 01.251-.262 1.347 1.347 0 01-.21.106 2.735 2.735 0 01-.639.179c-.007.001.056-.006.202-.006v-502C420.058-304 196-78.775 196 198h502zm-.5 0c.146 0 .209.007.202.006a2.735 2.735 0 01-.639-.179 1.347 1.347 0 01-.21-.106l.035.027a1.181 1.181 0 01.216.235c.02.029.002.008-.031-.071a1.43 1.43 0 01-.086-.274c-.007-.034-.005-.034-.001.009.004.042.014.156.014.353h502c0-276.775-224.058-502-501.5-502v502z'
						mask='url(#path-3-inside-1_448_9875)'
					></path>
					<path
						fill='#5946D7'
						d='M697 198c0 .197-.01.311-.014.353-.004.043-.006.043.001.009a1.43 1.43 0 01.086-.274c.033-.079.051-.1.031-.071a1.206 1.206 0 01-.216.235l-.035.027c.001-.001.067-.045.21-.106a2.735 2.735 0 01.639-.179c.007-.001-.056.006-.202.006v502c277.442 0 501.5-225.225 501.5-502H697zm.5 0c-.146 0-.209-.007-.202-.006a2.735 2.735 0 01.639.179c.143.061.209.105.21.106l-.035-.027a1.181 1.181 0 01-.216-.235c-.02-.029-.002-.008.031.071.039.09.07.193.086.274.007.034.005.034.001-.009A3.663 3.663 0 01698 198H196c0 276.775 224.058 502 501.5 502V198zm.5 0c0-.197.01-.311.014-.353.004-.043.006-.043-.001-.009a1.43 1.43 0 01-.086.274c-.033.079-.051.1-.031.071a1.206 1.206 0 01.251-.262 1.347 1.347 0 01-.21.106 2.735 2.735 0 01-.639.179c-.007.001.056-.006.202-.006v-502C420.058-304 196-78.775 196 198h502zm-.5 0c.146 0 .209.007.202.006a2.735 2.735 0 01-.639-.179 1.347 1.347 0 01-.21-.106l.035.027a1.181 1.181 0 01.216.235c.02.029.002.008-.031-.071a1.43 1.43 0 01-.086-.274c-.007-.034-.005-.034-.001.009.004.042.014.156.014.353h502c0-276.775-224.058-502-501.5-502v502z'
						mask='url(#path-3-inside-1_448_9875)'
					></path>
				</g>
				<circle cy='-11' r='201' stroke='#FB6019' strokeWidth='80' opacity='0.1'></circle>
				<path stroke='#FB6019' strokeWidth='50' d='M322-11a322.003 322.003 0 01-114.715 246.408M174.725 259.472a321.987 321.987 0 01-269.223 37.349' opacity='0.1'></path>
				<g filter='url(#filter0_f_448_9875)' opacity='0.2'>
					<ellipse cx='443.5' cy='224' fill='#fff' rx='203.5' ry='143'></ellipse>
				</g>
			</g>
			<defs>
				<pattern id='pattern0' width='0.549' height='1.739' patternContentUnits='objectBoundingBox'>
					<use transform='scale(.00137 .00435)' xlinkHref='#image0_448_9875'></use>
				</pattern>
				<filter id='filter0_f_448_9875' width='735' height='614' x='76' y='-83' colorInterpolationFilters='sRGB' filterUnits='userSpaceOnUse'>
					<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
					<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape'></feBlend>
					<feGaussianBlur result='effect1_foregroundBlur_448_9875' stdDeviation='82'></feGaussianBlur>
				</filter>
			</defs>
		</svg>
	);
}

export function SliderMuskMobileBg() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' height='200' fill='none' viewBox='0 0 345 200'>
			<mask id='mask0' style={{ maskType: 'alpha' }} width='100%' height='200' x='0' y='0' maskUnits='userSpaceOnUse'>
				<rect width='100%' height='200' fill='#4A4356' rx='20'></rect>
			</mask>
			<g mask='url(#mask0)'>
				<circle cx='328.5' cy='105.5' r='75.5' stroke='#5946D7' strokeWidth='142' opacity='0.1'></circle>
				<circle cx='19.352' cy='-11' r='65' stroke='#FB6019' strokeWidth='40' opacity='0.1'></circle>
				<path stroke='#FB6019' strokeWidth='20' d='M141.352-1c0 16.325-3.585 32.453-10.505 47.256a112.05 112.05 0 01-29.559 38.438M89.9 93.273a112.23 112.23 0 01-93.837 13.019' opacity='0.1'></path>
				<g filter='url(#filter0_f)' opacity='0.2'>
					<ellipse cx='183.5' cy='274' fill='#fff' rx='203.5' ry='143'></ellipse>
				</g>
			</g>
			<defs>
				<filter id='filter0_f' width='735' height='614' x='-184' y='-33' colorInterpolationFilters='sRGB' filterUnits='userSpaceOnUse'>
					<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
					<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape'></feBlend>
					<feGaussianBlur result='effect1_foregroundBlur' stdDeviation='82'></feGaussianBlur>
				</filter>
			</defs>
		</svg>
	);
}

export function HeaderDashboardIcon() {
	return(
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        	<path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
        </svg>
	)
}

export function HeaderMarketIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
			<path d="M531.6 103.8L474.3 13.1C469.2 5 460.1 0 450.4 0H93.6C83.9 0 74.8 5 69.7 13.1L12.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM483.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H112V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H432c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z"></path>
		</svg>
	)
}

export function HeaderOqimIcons() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
			<path d="M563.2 267.3c56.2-56.2 56.2-147.4 0-203.6S415.8 7.4 359.6 63.7L348.3 75l45.3 45.3 11.3-11.3c31.2-31.2 81.9-31.2 113.1 0s31.2 81.9 0 113.1L404.8 335.2c-31.2 31.2-81.9 31.2-113.1 0c-25.6-25.6-30.3-64.3-13.8-94.6c1.8-3.4 3.9-6.7 6.3-9.8l-51.2-38.4c-4.3 5.7-8.1 11.6-11.4 17.8c-29.5 54.6-21.3 124.2 24.9 170.3c56.2 56.2 147.4 56.2 203.6 0L563.2 267.3zM42.8 244.7c-56.2 56.2-56.2 147.4 0 203.6s147.4 56.2 203.6 0L257.7 437l-45.3-45.3-11.3 11.3c-31.2 31.2-81.9 31.2-113.1 0s-31.2-81.9 0-113.1L201.2 176.8c31.2-31.2 81.9-31.2 113.1 0c25.6 25.6 30.3 64.3 13.8 94.6c-1.8 3.4-3.9 6.7-6.3 9.8l51.2 38.4c4.3-5.7 8.1-11.6 11.4-17.8c29.5-54.6 21.3-124.2-24.9-170.3c-56.2-56.2-147.4-56.2-203.6 0L42.8 244.7z"></path>
		</svg>
	)
}

export function HeaderStatists() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zM439 279c15.1 15.1 41 4.4 41-17V152c0-13.3-10.7-24-24-24H345.9c-21.4 0-32.1 25.9-17 41l32.4 32.4L304 258.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0l-80 80c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L208 253.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0l80-80L439 279z"></path>
		</svg>
	)
}

export function HeaderPaymentIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
			<path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
		</svg>
	)
}

export function HeaderProfileIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="35"
			height="35"
			viewBox="0 0 24 24"
			fill="none"
			stroke="#13235B "
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
			<circle cx="12" cy="10" r="3" />
			<circle cx="12" cy="12" r="10" />
		</svg>
	)
}

export function SellerHomeProfileIcon() {
	return (
		<svg
			fill="white"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
              >
			<path
				fill-rule="evenodd"
				d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
				clip-rule="evenodd"
			></path>
        </svg>
	)
}

export function SellerProfileGridIcon() {
	return (
		<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GridViewIcon"><path fill-rule="evenodd" d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"></path></svg>
	)
}

export function TelegramIcon() {
	return (
		<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.002 44C12.9563 44 4.00195 35.0456 4.00195 24C4.00195 12.9543 12.9563 4 24.002 4C35.0476 4 44.002 12.9543 44.002 24C44.002 35.0456 35.0476 44 24.002 44ZM17.7823 26.3416L17.8076 26.3256C18.967 30.1534 19.5467 32.0674 19.5467 32.0674C19.7713 32.6884 20.08 32.7992 20.4546 32.7486C20.829 32.6978 21.0278 32.4952 21.2722 32.2594C21.2722 32.2594 22.0648 31.4944 23.65 29.9646L28.7518 33.7396C29.6814 34.2532 30.3526 33.9882 30.5834 32.8754L33.899 17.2328C34.265 15.7768 33.623 15.1929 32.494 15.6551L13.0279 23.1742C11.6999 23.708 11.7063 24.451 12.7862 24.7822L17.7823 26.3416Z" fill="black"></path></svg>
	)
}