import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {API_OPTIONS} from "./constants"
import {addMovieItems} from "./movieSlice"
const useNowPlayingMovies = () =>{
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const dispatch = useDispatch()
   useEffect(()=>{
     const gettingMovieData = async() =>{
         const data = await fetch(url, API_OPTIONS)
         const jsonData = await data.json()
         console.log(jsonData)
         dispatch(addMovieItems(jsonData.results))
           }
    gettingMovieData()
   }, [])
}
export default useNowPlayingMovies