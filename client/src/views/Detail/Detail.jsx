import style from "./Detail.module.css"
import { useSelector, useDispatch } from "react-redux"
import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {getCountryById as getCountryById} from '../../Redux/actions'

const Detail = (params) =>{
//hooks
const {detailId} = useParams ();
const { myObject } = params;
const Countrydetails = useSelector(state => state.details);
const dispatch = useDispatch();

//when mount dipatch action get by ID ->(params)
useEffect(()=>{    
    dispatch(getCountryById(params));
},[detailId])
console.log(myObject);
    return(
        <div className={style.detail}>   
        <h1> Detalle del pais</h1>              
            {/* <img src={details.flag_img} alt={`Flag image of country ${Detail.name}`}  width="150em" height="110em"/> */}
            <h1>{`Params:${params.ID}`}</h1>    
            <h1></h1>       
                {/* flag_img= {Countries.flag_img}
                key= {Countries.ID}
                name= {Countries.name}
                flag_img= {Countries.flag_img}
                continent= {Countries.continent}
                capital= {Countries.capital}
                subregion= {Countries.subregion}
                area= {Countries.area}
                population= {Countries.population}
                activities= {Countries.activities}
                />                   */}
        </div>
    )
}

export default Detail;