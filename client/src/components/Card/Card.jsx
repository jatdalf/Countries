import style from "./Card.module.css"
import {Link} from 'react-router-dom'

const Card = (props)=>{    
    const data = props

    return (
    <div className={style.card}>   
    <table>
        <tr>
            <td><img className={style.FlagImg} src={props.flag_img} alt={props.flag_img}  width="150em" height="110em"/></td>
            <td><h3>{props.name}</h3></td>        
        </tr>
        <tr>
            <td colSpan={2}>Continent: {props.continent}</td>
        </tr>
        <tr>
            <td colSpan={2}>population: {props.population}</td>
        </tr>        
        <tr>
            <td colSpan={2}>
                <Link to={`/Detail/${props.ID}`}>
                <button className={style.glowOnHover} type="button" value={data}> Details </button>
                </Link>         
            </td>
        </tr>
    </table>      
    </div>)
}

export default Card