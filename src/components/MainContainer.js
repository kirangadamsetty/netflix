import {useSelector} from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"
const MainContainer = () =>{
    const movies = useSelector(store => store.movies)
    if (!movies || !movies.nowPlayingMovies || movies.nowPlayingMovies.length === 0) return
   
    const movieTrailer = movies?.nowPlayingMovies[0];
    return(
        <div>
        <VideoTitle title = {movieTrailer.title} description = {movieTrailer.overview}/>
        <VideoBackground movieId = {movieTrailer.id}/>
        </div>
    )
}
export default MainContainer