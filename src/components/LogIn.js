import Header from "./Header"
import {useState} from "react"
const LogIn = () =>{
    const [toggleLoginForm , setToggleLoginForm] = useState(true)
    const toggleForm = () =>{
           setToggleLoginForm(!toggleLoginForm)
    }
    return(
        <div>
        <Header/>
        <div className = "bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg')] bg-cover bg-center min-h-screen w-full">
        <div className = "flex flex-col justify-center items-center  h-screen">
        <div className = "bg-black bg-opacity-75 w-[400px] h-max  px-10 py-10 rounded-[5px]">
         <form>
         <h2 className = "font-bold text-white text-[35px]">{toggleLoginForm ? "Sign In" : "Sign Up"}</h2>
       {!toggleLoginForm &&  <div className = "my-4">
           <input type = "text" placeholder = "Enter Your Name" className = "text-white text-[18px] py-3 px-4 rounded-md bg-gray-600 bg-opacity-70 w-full"/>
           </div>}
         <div className = "my-4">
         <input type = "text" placeholder = "Enter Your Eamil" className = "text-white text-[18px] py-3 px-4 rounded-md bg-gray-600 bg-opacity-70 w-full"/>
         </div>

           <div className = "my-4">
           <input type = "password" placeholder = "Enter Your Password" className = "text-white text-[18px] py-3 px-4 rounded-md bg-gray-600 bg-opacity-70 w-full"/>
           </div>
           <button className  = "my-6 py-4 px-4 rounded-md bg-red-700 w-full text-white font-bold text-[18px]">{toggleLoginForm ? "Sign In" : "Sign Up"}</button>
        
         </form>
         <p className = "my-4 text-[16px] text-gray-400">New to Netlfix? <span className = "pl-1 cursor-pointer text-white font-semibold" onClick = {toggleForm}>{toggleLoginForm ? "Sign Up now." : "Sign In now."}</span></p>
         </div>
         </div>
        </div>
       </div>
    )
}
export default LogIn