import play from "./assets/play.png"
import info from "./assets/info.png"
const VideoTitle = (props) =>{
    const {title , description} = props
    return(
        <div className = "absolute flex flex-col justify-center px-24 z-10 bg-red py-36 w-2/6 bg-gradient-to-r from-black h-screen">
           <h2 className = "text-[40px] font-bold  text-white">{title}</h2>
           <p className = "text-[15px]  text-white">{description}</p>
           <div className = "mt-4 flex">
           <button className = "bg-white hover:bg-opacity-65 rounded-md py-2 w-[125px] text-black font-semibold my-4 text-lg flex justify-center items-center"><img src = {play} alt = "play" className = "mr-1"/>Play</button>
           <button className = "bg-gray-500 bg-opacity-60 hover:bg-opacity-90 rounded-md w-[125px]  py-2 mx-2 text-white font-semibold justify-center my-4 text-lg flex items-center"><img src = {info} alt = "info" className = "mr-1"/>More Info</button>
        </div>
        </div>
    )
}
export default VideoTitle 