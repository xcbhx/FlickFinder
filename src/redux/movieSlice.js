import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovie = createAsyncThunk("movie/fetch", async (title) => {
  const apikey = import.meta.env.VITE_MOIVE_API_KEY
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${title}`);
  const data = await response.json();
  return data.results;
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addMovie: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;