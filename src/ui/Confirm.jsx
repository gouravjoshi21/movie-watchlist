import styled from 'styled-components'
import Button from './Button'
import Heading from './Heading'

const StyledConfirm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    & p {
        color: var(--color-text-3);
        margin-bottom: 12px;
    }

    & div {
        display: flex;
        justify-content: flex-end;
        gap: 12px;
    }
`

function Confirm({ title, children, label, onConfirm, type = '', disabled, onCloseModal }) {
    return (
        <StyledConfirm>
            <Heading var="2">{title}</Heading>
            <p className="text-2">{children}</p>

            <div>
                <Button var="secondary" disabled={disabled} onClick={onCloseModal}>
                    Cancel
                </Button>
                <Button
                    var={type === 'danger' ? 'danger' : 'primary'}
                    disabled={disabled}
                    onClick={onConfirm}
                >
                    {label}
                </Button>
            </div>
        </StyledConfirm>
    )
}

export default Confirm
