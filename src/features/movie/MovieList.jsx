import styled from 'styled-components'

import MovieItem from './MovieItem'
import { useSelector } from 'react-redux'

const Parent = styled.div`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
`
const Message = styled.p`
    width: 100%;
    font-size: 16px;
    text-align: center;
`

function MovieList() {
    const { watchList } = useSelector((state) => state.movie)

    return (
        <Parent>
            {watchList.length === 0 ? (
                <Message>Not Found any movie in watchList 😔</Message>
            ) : (
                watchList.map((movie) => <MovieItem movie={movie} key={movie.id} />)
            )}
        </Parent>
    )
}

export default MovieList
