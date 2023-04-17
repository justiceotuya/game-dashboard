import React from 'react';
import ReactModal, { Props } from 'react-modal';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';


interface IModalProps extends Props {
    isOpen: boolean;
    children: React.ReactNode;
    ariaLabel?: string;

    overlayColor?: string;
}

// const ReactModal = styled(ReactModal)`
//     width: 100%;
//     height: fit-content;
//     margin: 0 auto;

//     @media screen and (min-width: 425px) {
//         width: fit-content;
//     }
// `;

const Modal: React.FC<IModalProps> = ({
    children,
    ariaLabel = 'Alert Modal',
    isOpen,
    onRequestClose,
    overlayColor,
}) => {
    // const { isOpen, children, onRequestClose } = props;
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
            className="fixed h-4 w-4 top-4 right-4 pointer translate-y-0 transition-transform hover:opacity-90 active:translate-y-0.8 "
            />
            {children}
        </ReactModal>
    );
};

export default Modal;
