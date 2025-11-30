import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import moviesSliceReducer from "./moviesSlice";

const store = configureStore({
  reducer: {
    // Add your reducers here
    user: userSliceReducer,
    movies: moviesSliceReducer,
  },
});
export default store;
