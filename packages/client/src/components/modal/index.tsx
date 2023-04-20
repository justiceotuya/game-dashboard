import React from 'react';
import ReactModal, { Props } from 'react-modal';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';


interface IModalProps extends Props {
    isOpen: boolean;
    children: React.ReactNode;
    ariaLabel?: string;

    overlayColor?: string;
}


const Modal: React.FC<IModalProps> = ({
    children,
    ariaLabel = 'Alert Modal',
    isOpen,
    onRequestClose,
    overlayColor,
}) => {

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            appElement={document.getElementById('root') as HTMLElement}
            ariaHideApp={process.env.NODE_ENV !== 'test'}
            contentLabel={ariaLabel}
            testId="modal-content"
            style={{
                overlay: {
                    ...ReactModal.defaultStyles.overlay,
                    backgroundColor: overlayColor || 'rgba(16, 24, 64, 0.8)',
                    zIndex: 999,
                    overflow: 'auto',
                },
            }}
            className="w-full h-fit mx-auto my-0"
        >
            <CloseIcon role="button" tabIndex={0} onClick={onRequestClose}
                className="fixed z-30 h-5 w-5 top-4 right-4 pointer translate-y-0 transition-transform hover:opacity-90 active:translate-y-0.8 "
            />
            {children}
        </ReactModal>
    );
};

export default Modal;
