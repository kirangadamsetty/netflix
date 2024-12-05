export const checkValidForm = (email , password) =>{
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
  if(!isEmailValid) return "Email is not Valid"
  if(!isPasswordValid) return "Password is not Valid"
 
  else return null
}
















