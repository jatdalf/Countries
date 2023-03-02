import style from "./Detail.module.css"
import backgroundImage from "../../Assets/detailsBg.jpg"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import { useState } from "react";
import { getCountryById } from '../../Redux/actions'
import { Loading } from "../../components/Loading/loading";

const Detail = ({activities}) =>{     
    const urlID = (window.location.href).slice(-3)
    const details = useSelector(state => state.details)
    const dispatch = useDispatch();
    const [activity, setActivity] = useState('')

        //when mount dipatch action get by ID ->(params)
    useEffect(()=>{    
        dispatch(getCountryById(urlID));
    },[])   
    
    function onChange(e) {
        if(e !== '-') {
        setActivity(activities.find(a => a.name === e))
        } else {
        setActivity('')
        }
    }

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
            <tr>
                <td>Activities:</td>
                
                <div >
                <select onChange={(e) => {onChange(e.target.value)}}>
                <option value='-'>Choose an activity!</option>
                {activities && activities.map((a) => (
                    <option value={`${a.name}`} key={`${a.id}`}>{a.name}</option>
                ))}
                </select>
                <div>
                { activity ? (
                    <>
                        <p><b>{activity.name}</b></p>
                        <p><b>Difficulty: </b> {activity.difficulty}</p>
                        <p><b>Duration: </b> {activity.duration === 1 ? `${activity.duration} hour` : `${activity.duration} hours`}</p>
                        <p><b>Season: </b> {activity.season}</p>
                    </> ) : (
                 <p></p>)
                }
                </div>        
                </div>
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