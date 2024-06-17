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
            console.log(action.payload.query)
            state.searchQuery = action.payload.query
        },
        addMovieInWatchList(state, action) {
            state.watchList.push(action.payload.movie)
        },
        setWatchList(state, action) {
            state.watchList = action.payload.movies
        }
    }
})

export const { setSearchQuery, addMovieInWatchList, setWatchList } = movieSlice.actions
export default movieSlice.reducer
