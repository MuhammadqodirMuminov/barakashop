import { GridIcon, oilsBannerImg } from '@/assets';
import { CustomButton } from '@/ui';
import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { categoriesItems } from '.';
import * as S from './styled';

export const AllCategories = () => {
	// const [popperAnchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	// const isPopperOpen = Boolean(popperAnchorEl);

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<S.AllCategories open={true}>
			<CustomButton
				display={'flex'}
				alignItems={'center'}
				justifyContent={'center'}
				gap={'5px'}
				flexDirection={'row-reverse'}
				bgColor={'#023581'}
				color={'#fff'}
				_hover={{ backgroundColor: '023581' }}
				text={ <><S.CatalogBtn>Katalog</S.CatalogBtn></> }
				_active={{ backgroundColor: '023581' }}
				image={<img src={GridIcon} alt='' />}
				onClick={onOpen}
			/>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bg={'none'} marginTop={'110px'} width={'100%'} maxW={'1260px'}>
					<ModalBody>
						<S.AllCategoriesContainer>
							<S.AllCategoriesBox>
								<S.Categories>{categoriesItems}</S.Categories>
								<S.OilsBanner>
									<p>
										Car oils №1 <br /> from official <br /> dealers
									</p>
									<img src={oilsBannerImg} alt='' />
								</S.OilsBanner>
							</S.AllCategoriesBox>
						</S.AllCategoriesContainer>
					</ModalBody>
				</ModalContent>
			</Modal>
		</S.AllCategories>
	);
};
