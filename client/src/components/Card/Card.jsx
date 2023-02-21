import style from "./Card.module.css"

const Card = (props)=>{
    return (
    <div className={style.card}>
        <h3>{props.name}</h3>
        <img src={props.flag_img} alt={props.flag_img}  width="150em" height="110em"/>        
        <p>Continent: {props.continent}</p>
        <p>Capital: {props.capital}</p>
        <p>Subregion: {props.subregion}</p>
    </div>
    )
}

export default Card