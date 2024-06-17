import { RiMovie2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const movieList = [
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
    width: 350px;
    position: relative;

    input {
        border-radius: 12px;
        width: 100%;
        height: 45px;
        padding: 0 24px;
        background: transparent;
        border: none;
        outline: none;
        background-color: var(--color-bg-2);

        &:focus {
            border-radius: 12px 12px 0 0;
        }

        &:focus ~ .search-list {
            display: grid;
        }
    }
`

const List = styled.ul`
    width: 100%;
    height: max-content;
    background-color: var(--color-bg-2);
    border-radius: 0 0 12px 12px;
    border: 1px solid var(--color-bg-3);
    overflow: hidden;

    position: absolute;
    top: 100%;
    left: 0;
    z-index: 99;

    display: none;
    gap: 4px;
`

const Item = styled.li`
    display: grid;
    grid-template-columns: 60px 1fr;

    p {
        padding: 4px 8px;
        font-size: 14px;
    }

    &:hover {
        img {
            transform: scale(1.1);
        }
        svg {
            transform: scale(1.4);
        }
    }
`
const Cover = styled.div`
    width: 100%;
    height: 90px;
    overflow: hidden;
    background: var(--color-bg-3);

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.2s ease-in-out;
    }

    svg {
        width: 24px;
        height: 24px;
        transition: all 0.2s;
        path {
            fill: var(--color-text-3);
        }
    }
`
const Message = styled.li`
    font-size: 14px;
    color: var(--color-text-2);
    padding: 8px 12px;
    text-align: center;
`

function SearchMovie() {
    return (
        <Parent>
            <input type="search" placeholder="Search movies..." />
            <List className="search-list">
                {/* <Message>Type something</Message> */}
                {movieList.map((movie) => (
                    <Item as={Link} to={`/movie/${movie.id}`}>
                        <Cover>
                            {movie.cover ? (
                                <img src={movie.cover} alt={`Movie cover of ${movie.title}`} />
                            ) : (
                                <RiMovie2Line />
                            )}
                        </Cover>
                        <p>{movie.title}</p>
                    </Item>
                ))}
            </List>
        </Parent>
    )
}

export default SearchMovie