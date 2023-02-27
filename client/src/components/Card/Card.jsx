import style from "./Card.module.css"
import { useSelector } from "react-redux"
import {Link} from 'react-router-dom'


const Card = (props)=>{    
    const data = props

    return (
    <div className={style.card}>         
        <h3>{props.name}</h3>
        <img src={props.flag_img} alt={props.flag_img}  width="150em" height="110em"/>
        <div>
            Continent: {props.continent}<br/>
            population: {props.population}<br/>            
        </div>
        <p/>
        <Link to={`/Detail/${props.ID}`}>
        <button className={style.glowOnHover} type="button" value={data}> Details </button>
        </Link>         
        </div>
    )
    
}

export default Card