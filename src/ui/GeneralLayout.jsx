import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useAllMovies } from '../features/movie/useAllMovies'
import LoadingSection from './LoadingSection'

function GeneralLayout() {
    const { movies, isLoading, error } = useAllMovies()

    return (
        <>
            {isLoading ? (
                <LoadingSection />
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
