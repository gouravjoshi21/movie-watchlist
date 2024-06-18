import { RouterProvider } from 'react-router-dom'
import router from './router'
import store from './store'
import { Provider } from 'react-redux'
import GlobalStyles from './styles/Global'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 60 * 1000
        }
    }
})

function App() {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <GlobalStyles />
                <RouterProvider router={router} />

                <Toaster
                    position="bottom-center"
                    gutter={12}
                    containerStyle={{ margin: '8px' }}
                    toastOptions={{
                        success: {
                            duration: 1500
                        },
                        error: {
                            duration: 2000
                        },
                        style: {
                            fontSize: '14px',
                            maxWidth: '500px',
                            padding: '16px 24px',
                            backgroundColor: 'var(--color-bg-3)',
                            color: 'var(--color-text-2)'
                        }
                    }}
                />
            </QueryClientProvider>
        </Provider>
    )
}

export default App
