import Header from "./Header"
import useNowPlayingMovies from "../utils/useNowPlayingMovies"
import MainContainer from "./MainContainer"
const Browse = () =>{
    
  useNowPlayingMovies()
    return(
        <div>
           <Header/>
           <MainContainer/>
        </div>
    )
}

export default Browse