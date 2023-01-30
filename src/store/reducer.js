import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:{
        addMovie: (state, action) => {
            state.movies = action.payload
        }
    }
})

export const { addMovie } = movieSlice.actions
export default movieSlice.reducer