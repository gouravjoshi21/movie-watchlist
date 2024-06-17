import { cloneElement, createContext, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { HiXMark } from 'react-icons/hi2'
import styled, { css } from 'styled-components'
import useOutSideClick from './../hooks/useOutsideClick'

const modalType = {
    popup: css`
        width: 600px;
        height: max-content;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 16px;
        padding: 24px;
    `,
    sidebar: css`
        width: 400px;
        height: 100vh;
        top: 0%;
        right: 0%;
        padding: 32px;
    `
}

const StyledModal = styled.div`
    position: fixed;
    background-color: var(--color-bg-1);
    transition: all 0.5s;
    border: 1px solid var(--color-bg-3);

    ${(props) => modalType[props.type]}
`
StyledModal.defaultProps = {
    type: 'sidebar'
}

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);

    backdrop-filter: blur(4px);
    z-index: 1000;
    transition: all 0.5s;
`

const Button = styled.button`
    background: none;
    border: none;
    padding: 0.4rem;
    border-radius: var(--border-radius-sm);
    transform: translateX(0.8rem);
    transition: all 0.2s;
    position: absolute;
    top: 12px;
    right: 32px;

    &:hover {
        background-color: var(--color-grey-100);
    }

    & svg {
        width: 28px;
        height: 28px;
        color: var(--color-text-2);
    }
`

const ModalContext = createContext()

function Modal({ children }) {
    const [openName, setOpenName] = useState('')
    const close = () => setOpenName('')
    const open = setOpenName

    return (
        <ModalContext.Provider value={{ openName, close, open }}>{children}</ModalContext.Provider>
    )
}

function Open({ children, opens: opensWindowName }) {
    const { open } = useContext(ModalContext)

    return cloneElement(children, { onClick: () => open(opensWindowName) })
}

function Window({ children, type = 'sidebar', name }) {
    const { openName, close } = useContext(ModalContext)
    const ref = useOutSideClick(close)

    if (name !== openName) return null

    return createPortal(
        <Overlay>
            <StyledModal type={type} ref={ref}>
                <Button onClick={close}>
                    <HiXMark />
                </Button>
                <div>{cloneElement(children, { onCloseModal: close })}</div>
            </StyledModal>
        </Overlay>,
        document.body
    )
}

Modal.Open = Open
Modal.Window = Window

export default Modal
