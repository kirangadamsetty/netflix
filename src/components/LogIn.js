import Header from "./Header"
import {checkValidForm} from "../utils/validateForm"
import {useState, useRef} from "react"
import { validateSignUpForm } from "../utils/validateSignUpForm"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase.js"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice.js"
const LogIn = () =>{
    const [isSignIn , setisSignIn] = useState(true)
    const [formErrorMessage , setFormErrorMessage] = useState("")
    const dispatch = useDispatch()
    const email  = useRef(null)
    const password  = useRef(null)
    const name = useRef(null)
    const toggleForm = () =>{
        setisSignIn(!isSignIn)
        setFormErrorMessage("")
        email.current.value = ""
        password.current.value = ""
 }
   const checkFormDetails = () =>{
  if(isSignIn === true){
   const message =  checkValidForm(email.current.value, password.current.value)
   setFormErrorMessage(message)
   if(message) return;

   signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    setFormErrorMessage("Login in success")
  })
  .catch((error) => {
    setFormErrorMessage(error.code)
    
    // swit ch (error.code) {
    //   case "auth/invalid-email":
    //     setFormErrorMessage("Invalid email format.");
    //     break;
    //   case "auth/user-not-found":
    //     setFormErrorMessage("No user found with this email.");
    //     break;
    //   case "auth/wrong-password":
    //     setFormErrorMessage("Incorrect password.");
    //     break;
    //   default:
    //     setFormErrorMessage(error.message);
    // }
  });

  }
   else{
    const message = validateSignUpForm(email.current.value, password.current.value, name.current.value)
   setFormErrorMessage(message)
   if(message) return;
   createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value
    }).then(() => {
      const {uid, email , displayName} = auth.currentUser;
      dispatch(addUser({uid: uid, email:email, displayName : displayName}))
  
    }).catch((error) => {
      setFormErrorMessage(error)
    });





   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setFormErrorMessage(errorCode + " " + errorMessage)
    // ..
  });
}
   }
  const handleSubmit = (e)=>{
    return e.preventDefault()
  }
 const handleErrorMessage = (formErrorMessage) =>{
  
    switch (formErrorMessage){
      case "Name should not Empty":
      return "Name should not Empty"
    case "Email is not Valid":
        return (
            <>
            <ul className = "list-disc pl-6">
            <li >Email must contain an '@' symbol.</li> 
              <li> Email cannot contain spaces. </li> 
          <li>Email must contain a valid domain (text after the '@')</li>
          <li>Domain must include at least one dot (e.g., 'example.com').</li>
              </ul>
            </>
        );
    case "Password is not Valid":
       return (
            <>
            <ul className = "list-disc pl-6">
            <li > Password contains at least eight characters</li> 
              <li> including at least one number </li> 
              <li>includes both lower and uppercase letters </li> 
              <li> include at least one special character (#, ?, !, @) </li>               
             <li> cannot be your old password</li>
              </ul>
            </>
        );    
   
    default: 
         return null
     }
    
 }
    return(
        <div>
        <Header/>
        <div className = "bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg')] bg-cover bg-center min-h-screen w-full">
        <div className = "flex flex-col justify-center items-center  h-screen">
        <div className = "bg-black bg-opacity-75 w-[400px] h-max  px-10 py-10 rounded-[5px]">
         <form onSubmit = {handleSubmit}>
         <h2 className = "font-bold text-white text-[35px]">{isSignIn ? "Sign In" : "Sign Up"}</h2>
       {!isSignIn &&  <div className = "my-4">
           <input type = "text"
           ref = {name}
            placeholder = "Enter Your Name" 
           className = "text-white text-[18px] py-3 px-4 rounded-md bg-gray-600 bg-opacity-70 w-full"/>
           </div>}
         <div className = "my-4">
         <input 
         ref  = {email}
         type = "text"          
         placeholder = "Enter Your Eamil" 
         className = "text-white text-[18px] py-3 px-4 rounded-md bg-gray-600 bg-opacity-70 w-full"/>
         </div>

           <div className = "my-4">
           <input 
             ref = {password}
           type = "password"         
           placeholder = "Enter Your Password" 
           className = "text-white text-[18px] py-3 px-4 rounded-md bg-gray-600 bg-opacity-70 w-full"/>
           </div>
           <p className = "font-semibold text-red-700 text-lg">{handleErrorMessage(formErrorMessage)}</p>
           <button 
           onClick = {checkFormDetails}
            className  = "my-6 py-4 px-4 rounded-md bg-red-700 w-full text-white font-bold text-[18px]">{isSignIn ? "Sign In" : "Sign Up"}</button>
           
         </form>
         <p className = "my-4 text-[16px] text-gray-400"> {isSignIn ? "New to Netflix? " : "Already a member? "}<span className = "pl-1 cursor-pointer text-white font-semibold" onClick = {toggleForm}>{isSignIn ? "Sign Up now." : "Sign In now."}</span></p>
         </div>
         </div>
        </div>
       </div>
    )
}
export default LogIn