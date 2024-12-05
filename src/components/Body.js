import Browse from "./Browse"
import Pratice from "./Pratice"
import LogIn from "./LogIn"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
const Body = () =>{
const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <LogIn/>
    },
    {
        path: "/Browse",
        element : <Browse/>
    },{
        path : "/pratice",
        element : <Pratice/>
    }
  
])





return(
    <div>
      <RouterProvider router = {appRouter}/>
    </div>
)
}

export default Body