import styled from 'styled-components'

const Parent = styled.main`
    max-width: 1200px;
    margin: 0 auto;
`

function Container({ children, ...props }) {
    return <Parent {...props}>{children}</Parent>
}

export default Container
