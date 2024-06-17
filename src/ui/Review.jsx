import { GoPencil } from 'react-icons/go'
import styled from 'styled-components'
import Button from './Button'

const Parent = styled.div`
    width: 100%;
    background-color: var(--color-bg-2);
    border-radius: var(--border-radius-md);
    padding: 16px;

    display: grid;
    grid-template-columns: 1fr max-content;
    gap: 16px;

    button {
        width: max-content;
        padding: 12px;
    }
`

const Content = styled.div`
    grid-column: 1 / 2;
`

const Stars = styled.div`
    grid-column: 1 / -1;
    display: flex;
    justify-content: end;
`

function Review({ ...props }) {
    return (
        <Parent {...props}>
            <Content>Great!</Content>
            <Button size="small" var="tertiary">
                <GoPencil />
            </Button>
            <Stars>⭐⭐⭐⭐⭐</Stars>
        </Parent>
    )
}

export default Review
