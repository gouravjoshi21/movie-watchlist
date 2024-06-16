import { RouterProvider } from 'react-router-dom'
import router from './router'
import store from './store'
import { Provider } from 'react-redux'
import GlobalStyles from './styles/Global'

function App() {
    return (
        <Provider store={store}>
            <GlobalStyles />
            <RouterProvider router={router} />
        </Provider>
    )
}

export default App
