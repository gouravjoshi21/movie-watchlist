import { useEffect, useRef, useState } from 'react'
import { RiMovie2Line } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useMovies } from '../features/movie/useMovies'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '../features/movie/movieSlice'

const Parent = styled.div`
    /* width: 350px; */
    position: relative;

    grid-area: search;

    input {
        border-radius: 12px;
        width: 100%;
        height: 45px;
        padding: 0 24px;
        background: transparent;
        border: none;
        outline: none;
        background-color: var(--color-bg-2);
        transition: none;
        &:focus {
            border-radius: 12px 12px 0 0;
        }
    }
`

const List = styled.ul`
    width: 100%;
    max-height: 300px;
    background-color: var(--color-bg-2);
    border-radius: 0 0 12px 12px;
    border: 1px solid var(--color-bg-3);
    overflow: hidden;
    overflow-y: auto;

    position: absolute;
    top: 100%;
    left: 0;
    z-index: 99;

    gap: 4px;
`

const Item = styled.li`
    display: grid;
    grid-template-columns: 60px 1fr;
    cursor: pointer;

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
    const [active, setActive] = useState(false)
    const [query, setQuery] = useState('')
    const { movies, isLoading, error } = useMovies()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const parentRef = useRef(null)
    const timeoutRef = useRef(null)
    function handleFocus(status) {
        const time = status ? 300 : 1
        setTimeout(() => setActive(status), time)
    }

    function handleClick(id) {
        handleFocus(false)
        navigate(`/imbd/${id}`)
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (parentRef.current && !parentRef.current.contains(event.target)) {
                handleFocus(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [parentRef])

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            if (query.length > 2) dispatch(setSearchQuery({ query }))
        }, 1000)

        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, [query])

    return (
        <Parent ref={parentRef}>
            <input
                type="search"
                placeholder="Search movies..."
                onFocus={() => handleFocus(true)}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {active && (
                <List className="search-list">
                    {query.length == 0 && <Message>Type something</Message>}
                    {query.length > 0 && query.length < 3 && (
                        <Message>Type at least 3 characters</Message>
                    )}
                    {isLoading && <Message>Loading...</Message>}
                    {query.length > 2 &&
                        !isLoading &&
                        movies.length > 0 &&
                        movies.map((movie) => (
                            <Item onClick={() => handleClick(movie.imdbID)} key={movie.imdbID}>
                                <Cover>
                                    {movie.Poster ? (
                                        <img
                                            src={movie.Poster}
                                            alt={`Movie cover of ${movie.Title}`}
                                        />
                                    ) : (
                                        <RiMovie2Line />
                                    )}
                                </Cover>
                                <p>{movie.Title}</p>
                            </Item>
                        ))}
                </List>
            )}
        </Parent>
    )
}

export default SearchMovie
