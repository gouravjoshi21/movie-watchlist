import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    temp: true
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {}
})

export const {} = movieSlice.actions
export default movieSlice.reducer
