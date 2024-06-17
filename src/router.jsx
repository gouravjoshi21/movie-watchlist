import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Movie from './pages/Movie'
import AddMovie from './pages/AddMovie'
import EditMovie from './pages/EditMovie'
import GeneralLayout from './ui/GeneralLayout'

const router = createBrowserRouter([
    {
        element: <GeneralLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/movie/:id', element: <Movie /> },
            { path: '/add-movie', element: <AddMovie /> },
            { path: '/edit-movie/:id', element: <EditMovie /> },
            { path: '/imbd/:id', element: <Movie imbd="true" /> }
        ]
    }
])

export default router
