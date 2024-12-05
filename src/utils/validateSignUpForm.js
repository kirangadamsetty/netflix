export const validateSignUpForm = (email , password, name) =>{

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(name.length === 0) return "Name should not Empty"
    if(!isEmailValid) return "Email is not Valid"
    if(!isPasswordValid) return "Password is not Valid"
   
    else return null
  }
  