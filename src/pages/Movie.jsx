import styled from 'styled-components'
import Header from '../ui/Header'
import Container from '../ui/Container'
import Heading from '../ui/Heading'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { SlCalender } from 'react-icons/sl'
import Chip from '../ui/Chip'
import { ucfirst } from '../utils/helpers'
import Button from '../ui/Button'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaRegEye } from 'react-icons/fa'
import Review from '../ui/Review'
import { useEffect, useState } from 'react'
import { KEY } from '../features/movie/useMovies'
import { CiBookmark } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { addMovieInWatchList } from '../features/movie/movieSlice'
import { RiMovie2Line } from 'react-icons/ri'
import { useCreateMovie } from '../features/movie/useCreateMovie'
import Modal from '../ui/Modal'
import Confirm from '../ui/Confirm'
import { useDeleteMovie } from '../features/movie/useDeleteMovie'
import ReviewForm from '../features/movie/ReviewForm'

const data = {
    id: 4,
    title: 'Spider Man: Homecoming',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae molestias similique magni modi eius incidunt, neque veritatis cum odio nihil quidem, totam asperiores corrupti, sapiente ullam laudantium iusto architecto error.',
    year: 2019,
    cover: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg',
    genre: 'action'
}

const Main = styled(Container)`
    padding: 32px 16px;

    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: min-content max-content max-content;
    gap: 24px;

    .movie-review {
        grid-column: 2 / 3;
        grid-row: 4 / 5;
    }
`
const Cover = styled.div`
    width: 100%;
    height: 320px;
    margin-bottom: 8px;
    border-radius: 12px;
    overflow: hidden;
    background: var(--color-bg-2);

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    grid-column: 1 / 2;
    grid-row: 1 / 4;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.2s ease-in-out;
    }

    svg {
        width: 32px;
        height: 32px;
        transition: all 0.2s;
        path {
            fill: var(--color-bg-3);
        }
    }
`

const Title = styled.div`
    grid-column: 2 / -1;

    display: flex;
    flex-direction: column;
    gap: 8px;
`
const Year = styled.div`
    color: var(--color-text-1);
    margin-bottom: 12px;

    display: flex;
    align-items: center;
    gap: 12px;

    svg {
        width: 20px;
        height: 20px;

        path {
            fill: #fff;
        }
    }
`
const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
`

const Description = styled.p`
    line-height: 1.7;
    font-weight: 300;
    color: var(--color-text-2);

    grid-column: 2 / -1;
    grid-row: 2 / 3;
`
const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: 12px;
`

function Movie({ imbd = false }) {
    const watchList = useSelector((state) => state.movie.watchList)
    const { deleteMovie, isDeleting } = useDeleteMovie()
    const { createMovie, isCreating } = useCreateMovie()
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const dispath = useDispatch()
    let { id } = useParams()

    function handleSaveWatchList() {
        createMovie(data)
    }

    useEffect(() => {
        setIsLoading(true)

        async function getData() {
            if (imbd) {
                try {
                    const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${id}`)

                    if (!res.ok) throw new Error('Something went wrong with fetching movies')

                    const data = await res.json()

                    if (data.Response === 'False') throw new Error('Not found!')

                    setData({
                        title: data.Title,
                        description: data.Plot,
                        year: data.Year,
                        genre: data.Genre.split(', ')[0],
                        cover: data.Poster
                    })
                    setIsLoading(false)
                } catch (error) {
                    navigate('/')
                }
            } else {
                let filtered = watchList.filter((movie) => movie.id == id)
                if (!filtered.length) navigate('/')
                setData(filtered[0])
                setIsLoading(false)
            }
        }

        getData()
    }, [id, imbd, watchList])

    function handleRemove(id) {
        deleteMovie(id)
    }

    return (
        <>
            {isLoading && <Main>Loading...</Main>}
            {!isLoading && (
                <Main>
                    <Cover className="cover">
                        {data.cover ? (
                            <img src={data.cover} alt={`Movie cover of ${data.title}`} />
                        ) : (
                            <RiMovie2Line />
                        )}
                    </Cover>
                    <Title>
                        <Heading>{data.title}</Heading>
                        <Year>
                            <SlCalender />
                            {data.year ?? '----'}
                        </Year>

                        <Tags>
                            <Chip>{ucfirst(data.genre)}</Chip>
                            {data.rating && <Chip>⭐ {data.rating} rating</Chip>}
                        </Tags>
                    </Title>

                    {data.description && <Description>{data.description}</Description>}

                    <Buttons>
                        {!imbd && (
                            <>
                                <Modal>
                                    <Modal.Open opens="logout">
                                        <Button size="small" var="tertiary">
                                            <AiOutlineDelete />
                                            Remove
                                        </Button>
                                    </Modal.Open>
                                    <Modal.Window type="popup" name="logout">
                                        <Confirm
                                            title="Remove"
                                            type="danger"
                                            label="Remove"
                                            disabled={isDeleting}
                                            onConfirm={() => handleRemove(data.id)}
                                        >
                                            Do you remove this movie from watchlist?
                                        </Confirm>
                                    </Modal.Window>
                                </Modal>

                                <Button size="small" var="tertiary">
                                    <FaRegEye />
                                    Watched
                                </Button>
                            </>
                        )}

                        {imbd && (
                            <>
                                <Button size="small" var="tertiary" onClick={handleSaveWatchList}>
                                    <CiBookmark />
                                    Save to Watchlist
                                </Button>
                            </>
                        )}
                    </Buttons>
                    {!data.review && <ReviewForm movie={data} />}
                    {!imbd && data.review && (
                        <Review
                            className="movie-review"
                            review={data.review}
                            rating={data.rating}
                        />
                    )}
                </Main>
            )}
        </>
    )
}

export default Movie
