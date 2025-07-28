import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    searchGPT: false,
    moviesStr: null,
    searchGPTMovies: null
  },
  reducers: {
    toggleSearchGPT: (state) => {
        state.searchGPT = !state.searchGPT
    },
    setGPTData: (state, action) => {
        const {moviesStr, movies} = action.payload;
        console.log(action, 'action');
        state.moviesStr = moviesStr;
        state.searchGPTMovies = movies;
    }
  },
});

export const { toggleSearchGPT, setGPTData } = configSlice.actions;
export default configSlice.reducer;
