import { Link } from "react-router-dom";
import style from "./Landing.module.css"

const Landing = () =>{
    return(
        <div className={style.landing}>
            <h1>Esta es mi Landing</h1>
            <Link to="/home">
                <button>Home</button>
            </Link>            
        </div>
    )
}

export default Landing;