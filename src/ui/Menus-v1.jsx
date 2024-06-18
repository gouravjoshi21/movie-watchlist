import { createContext, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { HiEllipsisVertical } from 'react-icons/hi2'
import styled from 'styled-components'
import useOutsideClick from '../hooks/useOutsideClick'

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const StyledToggle = styled.button`
    width: 20px;
    height: 20px;
    background: none;
    border: none;
    transform: translateY(10px);
    transition: all 0.2s;

    &:hover {
        background-color: var(--color-bg-3);
    }

    & svg {
        width: 20px;
        height: 20px;
        color: var(--color-bg-);
    }
`

const StyledList = styled.ul`
    position: fixed;

    background-color: var(--color-bg-2);
    box-shadow: var(--shadow-md);
    border-radius: var(--border-radius-md);
    overflow: hidden;

    right: ${(props) => props.position.x}px;
    top: ${(props) => props.position.y}px;
`

const StyledButton = styled.button`
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    padding: 12px 24px 12px 18px;
    font-size: 14px;
    transition: all 0.2s;

    display: flex;
    align-items: center;
    gap: 16px;

    &:hover {
        background-color: var(--color-bg-3);
    }

    & svg {
        width: 16px;
        height: 16px;
        color: var(--color-grey-400);
        transition: all 0.3s;
    }
`

const MenusContext = createContext()

function Menus({ children }) {
    const [openId, setOpenId] = useState('')
    const [position, setPosition] = useState(null)

    const close = () => setOpenId('')
    const open = setOpenId

    return (
        <MenusContext.Provider value={{ openId, close, open, position, setPosition }}>
            {children}
        </MenusContext.Provider>
    )
}

function Toggle({ id }) {
    // const props = useContext(MenusContext)
    // console.log(props)
    const { openId, close, open, setPosition } = useContext(MenusContext)

    function handleClick(e) {
        e.stopPropagation()
        const rect = e.target.closest('button').getBoundingClientRect()
        setPosition({
            x: window.innerWidth - rect.width - rect.x,
            y: rect.y + rect.height + 8
        })
        openId === '' || openId !== id ? open(id) : close()
    }

    return (
        <StyledToggle onClick={handleClick}>
            <HiEllipsisVertical />
        </StyledToggle>
    )
}

function List({ id, children }) {
    const { openId, close, position } = useContext(MenusContext)
    const ref = useOutsideClick(close, false)

    if (openId !== id) return null

    return createPortal(
        <StyledList position={position} ref={ref}>
            {children}
        </StyledList>,
        document.body
    )
}

function Button({ children, icon, onClick, ...props }) {
    const { close } = useContext(MenusContext)

    function handleClick() {
        onClick?.()
        close()
    }
    return (
        <li>
            <StyledButton onClick={handleClick} {...props}>
                {icon}
                <span>{children}</span>
            </StyledButton>
        </li>
    )
}

Menus.Menu = Menu
Menus.Toggle = Toggle
Menus.List = List
Menus.Button = Button

export default Menus
