import styled from 'styled-components'
import Header from '../ui/Header'
import Container from '../ui/Container'
import Heading from '../ui/Heading'
import MovieForm from '../features/movie/MovieForm'

const Main = styled(Container)`
    max-width: 400px;
    padding: 24px 16px;

    display: grid;
    gap: 24px;

    h1 {
        text-align: center;
    }
`

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/img/bg-2.jpg');
    background-size: cover;
    background-position: center;

    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
`
const Title = styled.div`
    text-align: center;

    h1 {
        margin-bottom: 6px;
    }

    p {
        font-size: 14px;
    }
`

function EditMovie() {
    return (
        <>
            <Background />

            <Header />

            <Main>
                <Title>
                    <Heading>Edit Movie</Heading>
                    <p>Update the details of the movie in your watchlist.</p>
                </Title>

                <MovieForm />
            </Main>
        </>
    )
}

export default EditMovie
