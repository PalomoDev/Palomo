import { FC, ReactNode, useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleEscapeKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50" onClick={handleCloseModal}>
                    <div className="p-4 rounded-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-end">
                            <button className="text-gray-100 hover:text-gray-700" onClick={onClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" width="35" height="35" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
