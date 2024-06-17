import { useEffect, useState } from 'react'
import { getMovies } from '../../services/apiMovies'
import { useDispatch } from 'react-redux'
import { setWatchList } from './movieSlice'

export function useAllMovies() {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchMovies() {
            try {
                setIsLoading(true)

                const res = await getMovies()

                setMovies(res)

                console.log(res)

                if (res.length > 0) dispatch(setWatchList({ movies: res }))
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error.message)
                }
            } finally {
                setIsLoading(false)
            }
        }

        fetchMovies()
    }, [])

    return { movies, isLoading, error }
}
