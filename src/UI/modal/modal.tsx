import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, TagCloseButton } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';
import { ModalProps } from './modal.props';

export const UiModal: FC<PropsWithChildren<ModalProps>> = ({ isOpen, onClose, title, children, closeTitle }) => {
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{title}</ModalHeader>
					<TagCloseButton />
					<ModalBody>{children}</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3} onClick={onClose}>
							{closeTitle}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
