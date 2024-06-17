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
        }
    }
})

export const { setSearchQuery } = movieSlice.actions
export default movieSlice.reducer
