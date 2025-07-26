import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        noPlayingMovies: [],
        movieTeaser: null
    },
    reducers: {
        setNowPlayingMovies: (state, actions) => {
            state.noPlayingMovies = actions.payload;
        },
        setMovieTeaser: (state, actions) => {
            state.movieTeaser = actions.payload
        }
    }
});

export default movieSlice.reducer;
export const { setNowPlayingMovies, setMovieTeaser } = movieSlice.actions;