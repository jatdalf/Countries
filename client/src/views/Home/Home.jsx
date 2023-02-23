import CardContainer from "../../components/CardContainer/CardContainer";
import { useEffect, useState } from "react";
import { getCountries, getCountriesByname } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Paginado from "../../components/Paginado/pager"
import Filterbar from "../../components/Filters/filterbar";
import { Route, useLocation } from 'react-router-dom';
import style from "./Home.module.css"


const Home = () =>{
    const dispatch = useDispatch();
    // const [setOrder] = useState("");

    useSelector(state => state.orderCountries)
    // const activity = useSelector(state => state.activity)
    
    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])
    
    // useEffect(()=>{
    //     dispatch(getCountriesByname("arg"))
    // },[dispatch])

    return(
        <div className={style.HomeDiv}>               
            <Filterbar/>           
            <CardContainer/>            
        </div>
    )
}

export default Home;