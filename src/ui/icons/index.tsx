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
