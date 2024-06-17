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
        }
    }
})

export const { setSearchQuery, addMovieInWatchList } = movieSlice.actions
export default movieSlice.reducer
