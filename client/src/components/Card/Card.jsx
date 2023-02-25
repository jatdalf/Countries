import style from "./Card.module.css"
import loadingIcon from "../../Assets/Loading.svg"
import { useSelector } from "react-redux"
import {Link} from 'react-router-dom'


const Card = (props)=>{
    const loading = useSelector(state => state.loading)
    const data = props

    return (
    <div className={style.card}>     
    {loading ? <img src={loadingIcon} alt="loading" name="loading"/> : 
        <h3>{props.name}</h3>}
        <img src={props.flag_img} alt={props.flag_img}  width="150em" height="110em"/>
        <div>
            Continent: {props.continent}<br/>
            population: {props.population}<br/>
            id: {props.ID}
        </div>
        <p/>
        <Link to={{ pathname:`/Detail/${props.ID}`, state:{props}}} className={style.homeButton} >
        <button className={style.glowOnHover} type="button" value={data}> Details </button>
        </Link>         
        </div>
    )
    
}

export default Card