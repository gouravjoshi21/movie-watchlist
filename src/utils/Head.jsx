import { Helmet } from 'react-helmet'

function Head({ data: { title, description } }) {
    const defaultDescription =
        'Keep track of your favorite movies with our Movie Watchlist App. Easily add, edit, delete, rate, and review movies in your personalized watchlist.'

    return (
        <Helmet>
            <title>{title} | Gourav Joshi</title>
            <meta name="Description" content={description ?? defaultDescription} />
            <meta property="og:title" content={`${title} - ` + import.meta.env.VITE_APP_NAME} />
            <meta property="og:site_name" content="Movie Watchlist" />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="movie" />
            <meta property="og:image" content={`${window.location.origin}/img/logo.jpg`} />
            <meta name="author" content={import.meta.env.AUTHOR} />
            <link rel="icon" type="image/x-icon" href={`${window.location.origin}/img/icon.png`} />
        </Helmet>
    )
}

export default Head
