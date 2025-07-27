import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    movieTeaser: null,
  },
  reducers: {
    setNowPlayingMovies: (state, actions) => {
      state.nowPlayingMovies = actions.payload;
    },
    setPopularMovies: (state, actions) => {
      state.popularMovies = actions.payload;
    },
    setTopRatedMovies: (state, actions) => {
      state.topRatedMovies = actions.payload;
    },
    setUpcomingMovies: (state, actions) => {
      state.upcomingMovies = actions.payload;
    },
    setMovieTeaser: (state, actions) => {
      state.movieTeaser = actions.payload;
    },
  },
});

export default movieSlice.reducer;
export const {
  setNowPlayingMovies,
  setPopularMovies,
  setTopRatedMovies,
  setUpcomingMovies,
  setMovieTeaser,
} = movieSlice.actions;
