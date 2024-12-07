import {createSlice} from "@reduxjs/toolkit"
const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        movieTrailerKey : null
    },
    reducers : {
        addMovieItems : (state , action)=>{
            state.nowPlayingMovies = action.payload
        },
        addMovieTrailerKey : (state , action)=>{
            state.movieTrailerKey = action.payload
        }
    }
})
export const {addMovieItems, addMovieTrailerKey} = movieSlice.actions
export default movieSlice.reducer