import { useDispatch, useSelector } from "react-redux"
import { orderBy, getCountriesByname, ByContinent, byActivityName } from "../../Redux/actions";
import style from "../Filters/filter.module.css"

const Filterbar = ()=>{
    const dispatch = useDispatch();  
    const activity = useSelector(state => state.activities) //probando esto  
   
    function handleOrder(e) {dispatch(orderBy(e.target.value))}

    function handleSearch(e){dispatch(getCountriesByname(e.target.value))}

    function handleContinentFilter(e){                            
      dispatch(ByContinent(e.target.value))}
    
    function handleActivityFilter(e){
        // if(e.target.value==="0"){ //this is for activity difficulty filter           
        if(e.target.value==="All"){
            dispatch(ByContinent("All"))
        }else {                        
            dispatch(byActivityName(e.target.value))
        }
    }
      
    return(
        <div className={style.filterContainer}> 
        <table className={style.filterTable}>
        <td className={style.firstCol}>           
            <fieldset ><legend> Select order method </legend>                
                <tr>
                    <td><input onClick={handleOrder} type="radio" name="order" key="az" value="az"/> By Name: from A to Z</td>
                    <td><input onClick={handleOrder} type="radio" name="order" key="popAsc" value="popAsc"/> By Population from - to +</td>
                </tr>
                <tr>
                    <td><input onClick={handleOrder} type="radio" name="order" key="za" value="za"/> By Name: from Z to A</td>
                    <td><input onClick={handleOrder} type="radio" name="order" key="popDes" value="popDes"/> By Population from + to -</td>
                </tr>                                
            </fieldset>               
        </td>
        <td className={style.secondCol}>           
            <fieldset onChange={handleSearch}><legend> Find country by name </legend>   
                <tr ><td className={style.byNameInmput}><input trype="text" name="contryName" key="contryName" size="40"/></td></tr>
            </fieldset>              
        </td>
        <td className={style.thirdCol}>
        <fieldset  ><legend> Select Filter method </legend>   
            <tr>
                <td>Filter by continent: </td>
                <td>
                    <select onChange={handleContinentFilter} name="region">                 
                        <option defaultValue value="All" key="All" > All continents </option>
                        <option value='Africa' key='Africa'> Africa </option>
                        <option value='Antarctica' key='Antarctica'> Antarctica </option>
                        <option value='Asia' key='Asia'> Asia </option>
                        <option value='Europe' key='Europe'> Europe </option>
                        <option value='North America' key='NorthAmerica'> North America </option>
                        <option value='Oceania' key='Oceania'> Oceania</option>
                        <option value='South America' key='SouthAmerica'> South America </option>
                    </select>
                </td>                
            </tr>
            <tr>
                {/* <td>Filter by activity difficulty: </td>
                <td>
                <select name="activity" onChange={handleActivityFilter}>
                    <option value="0">All Activities</option>
                    <option value="1">Very Easy</option>
                    <option value="2">Easy</option>
                    <option value="3">Normal</option>
                    <option value="4">Difficult</option>
                    <option value="5">Extreme</option>
                    </select>
                </td> */}
            </tr><tr>
                <td>Filter by activity Name</td>
                <td>
                    <select onChange={handleActivityFilter} >
                        <option value='All' >All activities</option>
                        {activity.map(e => (
                            <option value={e.name} key={e.ID}>{e.name}</option>
                        ))}
                    </select>
                </td>

            </tr>
        </fieldset>              
        </td>
        </table>         
        </div>
    )
}

export default Filterbar