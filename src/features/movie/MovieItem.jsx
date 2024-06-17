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
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import Modal from '../../ui/Modal'
import Confirm from '../../ui/Confirm'
import { useDeleteMovie } from './useDeleteMovie'
import { useUpdateMovie } from './useUpdateMovie'

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

function MovieItem({ movie: { id, title, description, year, genre, cover, rating, watched } }) {
    const { deleteMovie, isDeleting } = useDeleteMovie()
    const { updateMovie, isUpdating } = useUpdateMovie(false)

    function handleRemove(id) {
        deleteMovie(id)
    }

    function toggleWatchStatus(status) {
        updateMovie({ id, watched: status })
    }

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

                <Modal>
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
                                <Modal.Open opens="remove-movie">
                                    <Menus.Button icon={<AiOutlineDelete />}>Remove</Menus.Button>
                                </Modal.Open>

                                {!watched ? (
                                    <Menus.Button
                                        icon={<FaRegEye />}
                                        onClick={() => toggleWatchStatus(true)}
                                    >
                                        Set Watched
                                    </Menus.Button>
                                ) : (
                                    <Menus.Button
                                        icon={<FaRegEyeSlash />}
                                        onClick={() => toggleWatchStatus(false)}
                                    >
                                        Set Not Watched
                                    </Menus.Button>
                                )}
                            </Menus.List>
                        </Menus.Menu>
                    </Menus>

                    <Modal.Window type="popup" name="remove-movie">
                        <Confirm
                            title="Remove"
                            type="danger"
                            label="Remove"
                            disabled={isDeleting}
                            onConfirm={() => handleRemove(id)}
                        >
                            Do you remove this movie from watchlist?
                        </Confirm>
                    </Modal.Window>
                </Modal>

                <Tags>
                    <Chip>{ucfirst(genre)}</Chip>
                    {rating && <Chip>⭐ {rating} rating</Chip>}
                </Tags>
            </Content>
        </Parent>
    )
}

export default MovieItem
