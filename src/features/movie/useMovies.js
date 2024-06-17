import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const KEY = '45e60500'

export function useMovies() {
    const { searchQuery: query } = useSelector((state) => state.movie)
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(
        function () {
            const controller = new AbortController()

            async function fetchMovies() {
                try {
                    setError('')
                    setIsLoading(true)

                    const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, {
                        signal: controller.signal
                    })

                    if (!res.ok) throw new Error('Something went wrong with fetching movies')

                    const data = await res.json()

                    if (data.Response === 'False') throw new Error('Movie not found!')

                    setMovies(data.Search)
                } catch (err) {
                    if (err.name !== 'AbortError') {
                        setError(err.message)
                    }
                } finally {
                    setIsLoading(false)
                }
            }

            if (query.length < 3) {
                setMovies([])
                setError('')
                return
            }

            if (query.length > 2) fetchMovies()

            return function () {
                controller.abort()
            }
        },
        [query]
    )

    return {
        movies,
        isLoading,
        error
    }
}
