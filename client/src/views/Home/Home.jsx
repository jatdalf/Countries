import CardContainer from "../../components/CardContainer/CardContainer";
import { useEffect, useState } from "react";
import { getCountries, getCountriesByname } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import filterBar from "../../components/Filters/filters";
import Paginado from "../../components/Paginado/pager"


const Home = () =>{
    // const [data, setData] = useState([]); // Lista completa de elementos
    // const [currentPage, setCurrentPage] = useState(1); // Página actual
    // const itemsPerPage = 10; // Número de elementos por página
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;
    // const currentData = data.slice(startIndex, endIndex);
    
        // function handlePageChange(page) {
    //     setCurrentPage(page);
    //   }
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])
    
    // useEffect(()=>{
    //     dispatch(getCountriesByname("arg"))
    // },[dispatch])

    return(
        <div>
            <filterBar></filterBar>
            {/* <ul>
                {currentData.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
            <Paginado itemsPerPage={itemsPerPage} data={data} onPageChange={handlePageChange} /> */}
            <CardContainer></CardContainer>            
        </div>
    )
}

export default Home;