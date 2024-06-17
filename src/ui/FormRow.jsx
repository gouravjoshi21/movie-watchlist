import { cloneElement, useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledFormRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
    }

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }

    &:has(button) {
        display: flex;
        justify-content: flex-end;
        gap: 1.2rem;
    }
`

const Header = styled.div`
    max-width: 400px;

    display: flex;
    justify-content: space-between;
`

const Label = styled.label`
    font-weight: 500;
    color: var(--color-text-2);
    font-size: 14px;
`

const Error = styled.span`
    color: var(--color-red-1);
    font-size: 14px;
`

const Body = styled.div`
    overflow: hidden;

    display: grid;
    grid-template-columns: 1fr max-content;

    & > * {
        padding: 0 16px;
        font-size: 14px;
        display: flex;
        align-items: center;
    }

    input {
        height: 45px;
        padding: 0 16px;
        background-color: var(--color-bg-3);
        font-size: 14px;
        outline: none;

        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px var(--color-bg-1) inset !important;
            -webkit-text-fill-color: var(--color-text-1) !important;
        }
    }

    textarea {
        height: 100px;
        resize: none;
        outline: none;
        padding: 8px 16px;
    }
`

const PostFix = styled.div`
    background-color: var(--color-bg-4);
    color: var(--color-text-3);
`

function FormRow({ label, error, children, id = '', postFix = '', type = null, setValue }) {
    const [inputValue, setInputValue] = useState()
    const [isSelectFolderOpen, setIsSelectFolderOpen] = useState(false)

    const handler = async () => {
        switch (type) {
            case 'select':
                if (!isSelectFolderOpen) {
                    setIsSelectFolderOpen(true)
                    const path = await window.api.openFolderDialog()

                    setInputValue(path)
                    setIsSelectFolderOpen(false)
                    document.activeElement.blur()
                }

                break
            default: // Do nothing
        }
    }

    useEffect(() => {
        if (inputValue) setValue(children.props.id, inputValue)
    }, [inputValue])

    return (
        <StyledFormRow>
            <Header>
                {label && (
                    <Label className="text-3" htmlFor={children.props.id ?? id}>
                        {label}
                    </Label>
                )}
                {error && <Error className="text-4">{error}</Error>}
            </Header>
            <Body>
                {children}
                {/* {type === 'select' ? cloneElement(children, { onFocus: handler }) : children}
                {postFix &&
                    (type === 'select' ? (
                        <PostFix onClick={handler}>{postFix}</PostFix>
                    ) : (
                        <PostFix>{postFix}</PostFix>
                    ))} */}
            </Body>
        </StyledFormRow>
    )
}

export default FormRow
