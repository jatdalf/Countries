import style from "./Detail.module.css"
import backgroundImage from "../../Assets/detailsBg.jpg"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCountryById } from '../../Redux/actions'
import { Loading } from "../../components/Loading/loading";

const Detail = () =>{     
    const urlID = (window.location.href).slice(-3)
    const details = useSelector(state => state.details)
    const dispatch = useDispatch();

    //when mount dipatch action get by ID ->(params)
    useEffect(()=>{    
        dispatch(getCountryById(urlID));
    },[])   

    // if (details.length === 0 || details.id !==urlID || details === null ) {
    if (details.length === 0  || details === null ) {
           return <Loading/>         
    } else {
        return(
        <body className={style.bg} background={backgroundImage}>
        <div className={style.detail}>   
        <h1> Country Detail </h1>              
        <table className={style.detailTable}>
            <tr>                
                <td className={style.box} rowSpan="6">
                    <img className={style.FlagImg} src={details.flag_img} alt={`Flag image of country ${details.name}`} />
                </td>
                <td className={style.tdRight}>
                    <tr>Name: </tr>   
                    <tr>Continent: </tr>  
                    <tr>Capital: </tr>  
                    <tr>Subregion: </tr> 
                    <tr>Area: </tr> 
                    <tr>Population: </tr>                 
                </td>
                <td className={style.tdLeft}>
                    <tr>{details.name}</tr>   
                    <tr>{details.continent}</tr>  
                    <tr>{details.capital}</tr> 
                    <tr>{details.subregion}</tr> 
                    <tr>{details.area}</tr>   
                    <tr>{details.population}</tr>               
                </td>                
            </tr>
            
        </table>
        
                {/* flag_img= {Countries.flag_img}
                key= {Countries.ID}
                
                capital= {Countries.capital}
                subregion= {Countries.subregion}
                area= {Countries.area}
                population= {Countries.population}
                activities= {Countries.activities}
                />                   */}
        </div>
        </body>
    )}
}

export default Detail;