import style from "./Detail.module.css"
import backgroundImage from "../../Assets/detailsBg.jpg"
import { useSelector, useDispatch } from "react-redux"
import React, { useEffect, useState } from 'react';
import { getCountryById, getActivities } from '../../Redux/actions'
import { Loading } from "../../components/Loading/loading";

const Detail = () =>{     
  // const urlID = (window.location.href).slice(-3)
  const details = useSelector(state => state.details) //activity detail
  const dispatch = useDispatch();
  const [activity, setActivity] = useState('')
  const activities = details.activities  

  //when mount... dispatch action get by ID ->(params)
  useEffect(()=>{    
    const urlID = (window.location.href).slice(-3)
    // eslint-disable-next-line
    dispatch(getCountryById(urlID));    
    getActivities()
  },[dispatch])   
    
  function onChange(event) {
    if(event !== '-') {
    setActivity(activities.find(a => a.name === event))       
    } else {
    setActivity('')
    }
  }
    
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
            <img className={style.FlagImg} src={details.flag_img} alt={`Flag of country ${details.name}`} />
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
        <table className={style.detailTable}>
        <tr><th colspan="2">Activities:</th></tr>             
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
                    <tr><td>Activity Name: </td><td>{activity.name}</td></tr>
                    <tr><td>Difficulty: </td><td>{activity.dificulty}</td></tr>
                    <tr><td>Duration: </td><td>{activity.duration === 1 ? `${activity.duration} hour` : `${activity.duration} hours`}</td></tr>
                    <tr><td>Season: </td><td>{activity.season}</td></tr>
                </> ) : (
                <p></p>)
            }
            </div>        
            </div>
                                
    </table>
    </div>
    </body>
)}
}

export default Detail;