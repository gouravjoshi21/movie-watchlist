import styled from 'styled-components'
import Chip from '../../ui/Chip'
import { ucfirst } from '../../utils/helpers'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button'
import { RiMovie2Line } from 'react-icons/ri'
import Menus from '../../ui/Menus'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit2 } from 'react-icons/fi'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { FaRegEye } from 'react-icons/fa'

const Parent = styled.div`
    width: 200px;
    height: max-content;

    &:hover {
        img {
            transform: scale(1.1);
        }

        & .cover {
            svg {
                transform: scale(1.4);
            }
        }
    }
`
const Cover = styled.div`
    width: 100%;
    height: 290px;
    margin-bottom: 8px;
    border-radius: 12px;
    overflow: hidden;
    background: var(--color-bg-2);

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
        width: 32px;
        height: 32px;
        transition: all 0.2s;
        path {
            fill: var(--color-bg-3);
        }
    }
`
const Content = styled.div`
    width: 100%;
    height: max-content;

    display: grid;
    align-items: start;
    grid-template-columns: 1fr 20px;

    p {
        font-size: 16px;
        color: var(--color-text-1);
        margin-bottom: 8px;
    }

    button {
        position: absolute;
    }
`

const Tags = styled.div`
    width: 100%;
    grid-column: 1 / -1;

    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`

function MovieItem({ movie: { id, title, description, year, genre, cover } }) {
    return (
        <Parent>
            <Cover className="cover" as={Link} to={`/movie/${id}`}>
                {cover ? <img src={cover} alt={`Movie cover of ${title}`} /> : <RiMovie2Line />}
            </Cover>
            <Content>
                <p>
                    <Link to={`/movie/${id}`}>
                        {ucfirst(title)} ( {year} )
                    </Link>
                </p>

                <Menus>
                    <Menus.Menu>
                        <Menus.Toggle id={id} />
                        <Menus.List id={id}>
                            <Menus.Button
                                icon={<MdOutlineArrowOutward />}
                                as={Link}
                                to={`/movie/${id}`}
                            >
                                View
                            </Menus.Button>
                            <Menus.Button icon={<FiEdit2 />} as={Link} to={`/edit-movie/${id}`}>
                                Edit
                            </Menus.Button>
                            <Menus.Button icon={<AiOutlineDelete />}>Remove</Menus.Button>
                            <Menus.Button icon={<FaRegEye />}>Watched</Menus.Button>
                        </Menus.List>
                    </Menus.Menu>
                </Menus>
                <Tags>
                    <Chip>{ucfirst(genre)}</Chip>
                    <Chip>⭐ 4 rating</Chip>
                </Tags>
            </Content>
        </Parent>
    )
}

export default MovieItem