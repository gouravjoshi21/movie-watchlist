import { useMutation } from '@tanstack/react-query'

import { deleteMovie as deleteMovieApi } from '../../services/apiMovies'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { removeMovieFromWatchList } from './movieSlice'

export function useDeleteMovie() {
    const dispath = useDispatch()
    const navigate = useNavigate()

    const { mutate: deleteMovie, isPending: isDeleting } = useMutation({
        mutationFn: deleteMovieApi,
        onSuccess: (id) => {
            dispath(removeMovieFromWatchList({ id }))
            navigate(`/`)
            toast.success('Movie Removed successfully!')
        },
        onError: (err) => toast.error(err.message)
    })

    return { isDeleting, deleteMovie }
}
