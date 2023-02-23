import { useDispatch } from "react-redux"
import { orderBy } from "../../Redux/actions";
import style from "../Filters/filterBar.module.css"

const Filterbar = ()=>{
    const dispatch = useDispatch();    

    function handleOrder(e) {                   
        dispatch(orderBy(e.target.value))  
    }

    function handleSearch(e){

    }

    function handleFilter(e){

    }

    return(
        <div className={style.filterContainer}> 
        <table className={style.filterTable}>
        <td className={style.firstCol}>           
            <fieldset onChange={handleOrder}><legend> Select order method </legend>                
                <tr>
                    <td><input type="radio" name="order" key="az" value="az"/> By Name: from A to Z</td>
                    <td><input type="radio" name="order" key="popAsc" value="popAsc"/> By Population from - to +</td>
                </tr>
                <tr>
                    <td><input type="radio" name="order" key="za" value="za"/> By Name: from Z to A</td>
                    <td><input type="radio" name="order" key="popDes" value="popDes"/> By Population from + to -</td>
                </tr>                                
            </fieldset>               
        </td>
        <td className={style.secondCol}>           
            <fieldset onChange={handleSearch}><legend> Find country by name </legend>   
                <tr ><td className={style.byNameInmput}><input trype="text" name="contryName" key="contryName" size="40"/></td></tr>
            </fieldset>              
        </td>
        <td className={style.thirdCol}>
        <fieldset onChange={handleFilter}><legend> Select Filter method </legend>   
            <tr>
                <td>Filter by region: </td>
                <td>
                    <select name="region">
                    <option value="1">..........................................</option>
                    <option value="2">Easy</option>
                    <option value="3">Normal</option>
                    <option value="4">Difficult</option>
                    <option value="5">Extreme</option>
                    </select>
                </td>                
            </tr>
            <tr>
                <td>Filter by activity: </td>
                <td>
                <select name="activity">
                    <option value="1">Very Easy</option>
                    <option value="2">Easy</option>
                    <option value="3">Normal</option>
                    <option value="4">Difficult</option>
                    <option value="5">Extreme</option>
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