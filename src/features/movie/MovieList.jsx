import styled from 'styled-components'

import MovieItem from './MovieItem'

const list = [
    {
        id: 4,
        title: 'Spider man',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae molestias similique magni modi eius incidunt, neque veritatis cum odio nihil quidem, totam asperiores corrupti, sapiente ullam laudantium iusto architecto error.',
        year: 2019,
        cover: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg',
        genre: 'action'
    },
    {
        id: 5,
        title: 'Spider-Man: No Way Home',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae molestias similique magni modi eius incidunt, neque veritatis cum odio nihil quidem, totam asperiores corrupti, sapiente ullam laudantium iusto architecto error.',
        year: 2021,
        cover: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg',
        genre: 'action'
    },
    {
        id: 6,
        title: 'Spider-Man: Homecoming',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae molestias similique magni modi eius incidunt, neque veritatis cum odio nihil quidem, totam asperiores corrupti, sapiente ullam laudantium iusto architecto error.',
        year: 2017,
        cover: 'https://m.media-amazon.com/images/M/MV5BODY2MTAzOTQ4M15BMl5BanBnXkFtZTgwNzg5MTE0MjI@._V1_SX300.jpg',
        genre: 'action'
    },
    {
        id: 7,
        title: 'Spider-Man: 4',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae molestias similique magni modi eius incidunt, neque veritatis cum odio nihil quidem, totam asperiores corrupti, sapiente ullam laudantium iusto architecto error.',
        year: 2017,
        cover: '',
        genre: 'action'
    }
]
const Parent = styled.div`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
`

function MovieList() {
    return (
        <Parent>
            {list.length && list.map((movie) => <MovieItem movie={movie} key={movie.id} />)}
        </Parent>
    )
}

export default MovieList
