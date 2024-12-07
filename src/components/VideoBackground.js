
import {useSelector} from "react-redux"

import useMovieTrailer from "../utils/useMovieTrailer"
const VideoBackground = ({movieId}) =>{
    
    const movieTrailerVideo = useSelector(store => store.movies)
    useMovieTrailer(movieId)
   console.log(movieTrailerVideo.movieTrailerKey)

    return(
        <div className = "absolute bg-gradient-to-r from-black">
<iframe
  className="h-screen w-screen"
  src={`https://www.youtube.com/embed/${movieTrailerVideo.movieTrailerKey}?autoplay=1&mute=1`}
  title="YouTube video player"
  allow="autoplay;"
  referrerPolicy="strict-origin-when-cross-origin"
></iframe>
        </div>
    )
}
export default VideoBackground