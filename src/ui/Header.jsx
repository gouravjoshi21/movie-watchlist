import styled from 'styled-components'
import Logo from './Logo'
import SearchMovie from './SearchMovie'
import Button from './Button'
import { GoPlus } from 'react-icons/go'
import { Link } from 'react-router-dom'
import Container from './Container'

const Parent = styled(Container)`
    max-width: 1200px;
    height: 80px;
    margin: 0 auto;
    padding: 0 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

function Header() {
    return (
        <Parent as="header">
            <Logo />

            <SearchMovie />

            <Button size="small" as={Link} to="/add-movie">
                {/* <GoPlus /> */}
                Add Movie
            </Button>
        </Parent>
    )
}

export default Header
