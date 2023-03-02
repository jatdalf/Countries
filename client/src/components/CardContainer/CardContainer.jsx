import Card from "../Card/Card"
import style from "./CardContainer.module.css"
import { useSelector } from "react-redux"
import Pagination from "../Pagination/pager"
import { useDispatch } from "react-redux"
import { useState, useEffect } from "react"

const CardContainer = ()=>{
    const dispatch = useDispatch();
    const filtrados=useSelector(state=>state.continentFilter)
    const search= useSelector(state=>state.Countries)
    const allCountries = useSelector(state => state.countries);
    // useEffect(() => {    
    //     setCurrentPage(1)
    //     setPageItems(0)
    // },[]);
    const Countries = useSelector(state => state.Countries)
    //pagination data
    const [countryData, setCountryData] = useState ([]);
    const [currentPage, setCurrentPage] = useState (1)
    const [cardPerPage, setCardPerPage] = useState (9)
    const lastCardIndex = currentPage * cardPerPage;
    const fistCardIndex = lastCardIndex - cardPerPage; 
    const currentCard = Countries.slice(fistCardIndex, lastCardIndex)
    //end pagination data
    return (
        <div>
            <Pagination 
                totalCards={Countries.length} 
                cardPerPage={cardPerPage} 
                setCurrentPage={setCurrentPage}/>        
        <div className={style.CardContainer}>
            {/* {Countries.map(country =>{ */}
            {currentCard.map(country =>{
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