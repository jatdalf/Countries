import Card from "../Card/Card"
import style from "./CardContainer.module.css"
import { useSelector } from "react-redux"

import { useDispatch } from "react-redux"
import { useState, useEffect } from "react"

const CardContainer = ()=>{
//paginado
const dispatch = useDispatch();
const[pageItems, setPageItems]=useState(0)
const[currentPage,setCurrentPage]=useState(1)
const filtrados=useSelector(state=>state.continentFilter)
const search= useSelector(state=>state.Countries)
const allCountries = useSelector(state => state.countries);

useEffect(() => {    
    setCurrentPage(1)
    setPageItems(0)
},[]);
    
const Countries = useSelector(state => state.Countries)
const PageHandler= ()=>{
    if(filtrados.length>0){
        if(currentPage===1){
            return filtrados.slice(pageItems,pageItems+9)
        }
        return filtrados.slice(pageItems-1,pageItems+9)
    }else if((search.length>0)){
        if(currentPage===1){
            return search.slice(pageItems,pageItems+9)
        }
        return search.slice(pageItems-1,pageItems+9)
    }else{
        if(currentPage===1){
            return allCountries.slice(pageItems,pageItems+9)
        }
        return allCountries.slice(pageItems-1,pageItems+9) 
    }  
} 
const NextHandler= ()=>{
    if(pageItems+1>=Countries.length)return;
    setPageItems(pageItems+10)
    setCurrentPage(currentPage+1)
}
const PrevHandler= ()=>{
    const prevPage= currentPage-1
    if(prevPage<=0)return;
    setPageItems(pageItems-10)
    setCurrentPage(currentPage-1)    
}

    return (
        <div>
            <div className={style.paginado}>
                <button className={style.Pbutton} onClick={PrevHandler}>Prev</button>
                <span className={style.texto}>{currentPage}</span>
                <button className={style.Pbutton} onClick={NextHandler}>Next</button>                        
            </div>
        <div className={style.CardContainer}>
            {Countries.map(country =>{
                return <Card
                key= {country.ID}
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
        </div>
        )
}

export default CardContainer