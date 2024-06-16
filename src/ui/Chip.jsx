import styled from 'styled-components'

const Parent = styled.div`
    width: fit-content;
    font-size: 12px;
    background: var(--color-bg-2);
    color: var(--color-text-3);
    padding: 8px 12px;
    border-radius: 12px;
`

function Chip({ children }) {
    return <Parent>{children}</Parent>
}

export default Chip
