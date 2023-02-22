import CardContainer from "../../components/CardContainer/CardContainer";
import { useEffect } from "react";
import { getCountries, getCountriesByname } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import Paginado from "../../components/Paginado/pager"
import filterbar from "../../components/Filters/filterbar";
import { Route, useLocation } from 'react-router-dom';
import style from "./Home.module.css"


const Home = () =>{
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])
    
    // useEffect(()=>{
    //     dispatch(getCountriesByname("arg"))
    // },[dispatch])

    return(
        <div className={style.HomeDiv}>   
            <Route path="/" render = {()=> <filterbar/>}/>  
            <fieldset>
                <legend> Select order method </legend> 
                   <p><input type="radio" name="order" id="az" value="az"/>Order from A to Z</p> 
                   <p><input type="radio" name="order" id="za" value="za"/>Order from Z to A</p>                 
            </fieldset>
            
            <CardContainer></CardContainer>            
        </div>
    )
}

export default Home;