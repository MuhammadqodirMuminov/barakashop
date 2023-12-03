import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  TagCloseButton,
	Button
} from "@chakra-ui/react";
import { ModalProps } from "./modal.props";


export const UiModal = ({ isOpen, onClose, title, children, closeTitle }:ModalProps) => {
  return (
    <>
      {" "}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <TagCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              {closeTitle}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
