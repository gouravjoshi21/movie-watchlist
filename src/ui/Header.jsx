import styled from 'styled-components'
import Logo from './Logo'
import SearchMovie from './SearchMovie'
import Button from './Button'
import { GoPlus } from 'react-icons/go'
import { Link } from 'react-router-dom'
import Container from './Container'
import Mixins from '../styles/Mixins'

const Parent = styled(Container)`
    max-width: 1200px;
    height: 80px;
    margin: 0 auto;
    padding: 0 16px;

    display: grid;
    grid-template-columns: max-content minmax(0, 250px) max-content;
    grid-template-areas: 'logo search button';

    justify-content: space-between;
    align-items: center;
    gap: 16px;

    ${Mixins.phone`
        height: max-content;
        padding: 16px;
        grid-template-columns: repeat(2, 1fr) max-content;
        grid-template-areas: 
                        "logo logo logo"
                        "search search button";
    `}

    .add-movie {
        grid-area: button;

        svg {
            display: none;
        }

        ${Mixins.phone`
            svg {
                display: block;
            }
            span {
                display: none
            }
        `}
    }
`

function Header() {
    return (
        <Parent as="header">
            <Logo />

            <SearchMovie />

            <Button size="small" as={Link} to="/add-movie" className="add-movie">
                <GoPlus />
                <span>Add Movie</span>
            </Button>
        </Parent>
    )
}

export default Header
