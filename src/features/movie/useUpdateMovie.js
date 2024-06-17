import { useMutation } from '@tanstack/react-query'

import { updateMovie as updateMovieApi } from '../../services/apiMovies'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { updateMovieInWatchList } from './movieSlice'

export function useUpdateMovie() {
    const dispath = useDispatch()
    const navigate = useNavigate()

    const { mutate: updateMovie, isPending: isUpdating } = useMutation({
        mutationFn: updateMovieApi,
        onSuccess: (data) => {
            dispath(updateMovieInWatchList({ movie: data[0] }))
            navigate(`/movie/${data[0].id}`)
            toast.success('Movie Updated successfully!')
        },
        onError: (err) => toast.error(err.message)
    })

    return { isUpdating, updateMovie }
}
