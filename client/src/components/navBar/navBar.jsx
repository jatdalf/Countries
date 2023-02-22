import { Link } from "react-router-dom";
import style from "./navBar.module.css"

const navBar = ()=>{
    return(
        <div className={style.navContainer}>
            <Link to="/home">Home</Link>
            <Link to="/form">Activities</Link>            
        </div>
    )
}

export default navBar