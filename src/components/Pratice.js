import {React, useRef} from "react"

const Pratice = ()=>{
   const handleFocus = () =>{
    focus.current.focus()
   }
    const focus = useRef()
    return(
        <div>
            <input type  = "text" ref = {focus}/>
            <button onClick= {handleFocus}>Focus Me</button>
        </div>
    )
}
export default Pratice