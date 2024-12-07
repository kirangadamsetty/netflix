import {useNavigate} from "react-router-dom"
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase.js"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice.js";
import {LOGO} from "../utils/constants"
const Header = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((store)=>store.user)
    const handleSignOut = () =>{
        signOut(auth).then(() => {
          }).catch((error) => {
            // An error happened.
          });
     
    }
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email , displayName} = user;
              dispatch(addUser({uid: uid, email:email, displayName : displayName}))
              navigate("/browse")
        } else {
          // User is signed out
          dispatch(removeUser())
          navigate("/")
        }
      })
   
      return ()=> unsubscribe()
   }, [])


    return(
        <div className = "fixed z-30 bg-gradient-to-b from-black  py-2 pb-4 w-screen flex justify-around items-center">
        <div className  = "container px-20">
            <img src  = {LOGO}
             alt = "logo"
             className = "w-56"   
             />
             </div>
          { user && user.displayName ? (  <div className = "flex gap-3 px-20">
             <p className = "bg-red-700 rounded-full w-10 h-10 text-center font-bold text-3xl text-white uppercase">{user?.displayName[0]}</p>
         <button className = "text-white font-semibold text-lg" onClick = {handleSignOut}>SignOut</button>
         </div>) :null  }

        </div>
    )



   }

export default Header