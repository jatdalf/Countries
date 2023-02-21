import Card from "../Card/Card"
import style from "./CardContainer.module.css"
import { useSelector } from "react-redux"

const CardContainer = ()=>{
const Countries = useSelector(state => state.Countries)
    return (
        <div className={style.CardContainer}>
            {Countries.map(country =>{
                return <Card
                ID= {country.ID}
                name= {country.name}
                flag_img= {country.flag_img}
                continent= {country.continent}
                capital= {country.capital}
                subregion= {country.subregion}
                area= {country.area}
                population= {country.population}
                activities= {country.activities}
                />
            })
            }        
        </div>
    )
}

export default CardContainer