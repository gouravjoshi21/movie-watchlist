import styled from 'styled-components'
import Header from '../ui/Header'
import Container from '../ui/Container'
import Heading from '../ui/Heading'
import { Link } from 'react-router-dom'
import { SlCalender } from 'react-icons/sl'
import Chip from '../ui/Chip'
import { ucfirst } from '../utils/helpers'
import Button from '../ui/Button'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaRegEye } from 'react-icons/fa'
import Review from '../ui/Review'

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

function Movie() {
    return (
        <>
            <Header />
            <Main>
                <Cover className="cover" as={Link} to={`/movie/${data.id}`}>
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
                        <Chip>⭐ 4 rating</Chip>
                    </Tags>
                </Title>

                <Description>
                    After being bitten by a genetically-modified spider, a shy teenager gains
                    spider-like abilities that he uses to fight injustice as a masked superhero and
                    face a vengeful enemy.
                </Description>
                <Buttons>
                    <Button size="small" var="tertiary">
                        <AiOutlineDelete />
                        View
                    </Button>
                    <Button size="small" var="tertiary">
                        <FaRegEye />
                        Watched
                    </Button>
                </Buttons>

                <Review className="movie-review" />
            </Main>
        </>
    )
}

export default Movie
