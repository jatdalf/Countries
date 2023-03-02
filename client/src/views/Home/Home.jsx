import CardContainer from "../../components/CardContainer/CardContainer";
import { useEffect } from "react";
import { getCountries } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Filterbar from "../../components/Filters/filterbar";
import style from "./Home.module.css"
import backgroundImage from "../../Assets/HomeBg.jpg"


const Home = () =>{
    const dispatch = useDispatch();
    useSelector(state => state.orderCountries)       
    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])

    return(
        <body className={style.HomeBg} background={backgroundImage}>
        <div className={style.HomeDiv}>               
            <Filterbar/>           
            <CardContainer/>            
        </div>
        </body>
    )
}

export default Home;