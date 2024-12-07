import {useDispatch} from "react-redux"
import {useEffect} from "react"
import {API_OPTIONS} from "./constants"
import {addMovieTrailerKey} from "./movieSlice"
const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch()

   useEffect(() =>{

    const getMovieVideos = async () =>{
        const data =  await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
        const jsonData = await data.json()
        const filteredVideoData = jsonData.results?.filter((video)=>{
          return  video.type === "Trailer"
          
        })
        const movieTrailer =filteredVideoData !== null ?  filteredVideoData[0]?.key : jsonData[0]?.key
        dispatch(addMovieTrailerKey(movieTrailer))
    }
    getMovieVideos()
  
   })
}
export default useMovieTrailer