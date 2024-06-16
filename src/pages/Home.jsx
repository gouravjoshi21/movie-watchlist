import styled from 'styled-components'

import Container from '../ui/Container'
import Header from '../ui/Header'
import Heading from '../ui/Heading'
import MovieList from '../features/movie/MovieList'

const Main = styled(Container)`
    padding: 32px 16px;

    h1 {
        color: var(--color-text-2);
        margin-bottom: 16px;
    }
`

function Home() {
    return (
        <>
            <Header></Header>

            <Main>
                <Heading>Watch List</Heading>

                <MovieList />
            </Main>
        </>
    )
}

export default Home
