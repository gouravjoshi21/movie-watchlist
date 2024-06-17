import { useMutation } from '@tanstack/react-query'

import { createMovie as createMovieApi } from '../../services/apiMovies'
import { useDispatch } from 'react-redux'
import { addMovieInWatchList } from './movieSlice'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export function useCreateMovie() {
    const dispath = useDispatch()
    const navigate = useNavigate()

    const { mutate: createMovie, isPending: isCreating } = useMutation({
        mutationFn: createMovieApi,
        onSuccess: (data) => {
            dispath(addMovieInWatchList({ movie: data[0] }))
            navigate(`/movie/${data[0].id}`)
            toast.success('Added to watchList')
        },
        onError: (err) => toast.error(err.message)
    })

    return { isCreating, createMovie }
}
