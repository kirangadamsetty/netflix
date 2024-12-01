import Browse from "./Browse"
import LogIn from "./LogIn"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
const Body = () =>{
    return(
        <div>
          <RouterProvider router = {appRouter}/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <LogIn/>
    },
    {
        path: "/Browse",
        element : <Browse/>
    }
])
export default Body