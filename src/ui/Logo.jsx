import { RiMovie2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Parent = styled(Link)`
    margin: 0 auto;

    display: flex;
    align-items: center;
    gap: 8px;

    grid-area: logo;

    svg {
        width: 32px;
        height: 32px;

        path {
            fill: var(--color-text-1);
        }
    }
`

function Logo() {
    return (
        <Parent to="/">
            <RiMovie2Line />
            Movies
        </Parent>
    )
}

export default Logo
