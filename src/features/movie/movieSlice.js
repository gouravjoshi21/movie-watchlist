import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchQuery: '',
    activeMovie: null,
    watchList: [],
    searchedMovie: null
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setSearchQuery(state, action) {
            state.searchQuery = action.payload.query
        },
        addMovieInWatchList(state, action) {
            state.watchList.unshift(action.payload.movie)
        },
        setWatchList(state, action) {
            state.watchList = action.payload.movies
        },
        updateMovieInWatchList(state, action) {
            const { id, ...newData } = action.payload.movie
            const movieIndex = state.watchList.findIndex((movie) => movie.id === id)
            if (movieIndex !== -1) {
                state.watchList[movieIndex] = {
                    ...state.watchList[movieIndex],
                    ...newData
                }
            }
        },
        removeMovieFromWatchList(state, action) {
            state.watchList = state.watchList.filter((movie) => movie.id !== action.payload.id)
        }
    }
})

export const {
    setSearchQuery,
    addMovieInWatchList,
    setWatchList,
    updateMovieInWatchList,
    removeMovieFromWatchList
} = movieSlice.actions
export default movieSlice.reducer
