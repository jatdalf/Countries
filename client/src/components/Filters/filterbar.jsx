import style from "../Filters/filterbar.module.css"

const filterbar = ()=>{
    return(
        <div className={style.filterContainer}>
            <label>Order by</label>  
            <input type="checkbox" id="asc" name="ascendant" value="cherry"/>
            <label for="asc">Az</label>    
            <input type="checkbox" id="desc" name="descendant" value="cherry"/>
            <label for="des">Za</label>    
        </div>
    )
}

export default filterbar