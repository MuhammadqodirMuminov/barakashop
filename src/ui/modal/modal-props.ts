export interface ModalProps {
    title: string;
    closeTitle: string;
    isOpen: boolean;
    onClose: () => void;
    // children: JSX.Element | JSX.Element[];
}
