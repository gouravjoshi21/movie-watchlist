import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useAllMovies } from '../features/movie/useAllMovies'

function GeneralLayout() {
    const { movies, isLoading, error } = useAllMovies()

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <Header />
                    <Outlet />
                </>
            )}
        </>
    )
}

export default GeneralLayout
