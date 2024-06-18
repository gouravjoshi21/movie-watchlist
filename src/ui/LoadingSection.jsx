import { RiMovie2Line } from 'react-icons/ri'
import styled from 'styled-components'

const Parent = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    svg {
        width: 64px;
        height: 64px;
    }
`

function LoadingSection() {
    return (
        <Parent>
            <RiMovie2Line />
            Loading...
        </Parent>
    )
}

export default LoadingSection
