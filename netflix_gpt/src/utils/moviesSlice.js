import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: { nowPlaying: null },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      console.log("Movies in Slice:", state.movies, state);
      state.nowPlaying = action.payload;
    },
  },
});

const { setNowPlayingMovies, nowPlaying } = moviesSlice.actions;
export { setNowPlayingMovies, nowPlaying };
export default moviesSlice.reducer;
