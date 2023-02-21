import { Link } from "react-router-dom";
import style from "./Landing.module.css"

import BackgroundVideo from "../../Assets/bg.mp4"

const Landing = () =>{
    return(        
        <div >                      
            <video className={style.landingVideo} autoPlay muted loop id="background-video">
                <source src={BackgroundVideo} type="video/mp4" />
            </video>
            <Link to="/home" className={style.homeButton} >
                <button>Home</button>
            </Link>  
        </div>
    )
}

export default Landing;