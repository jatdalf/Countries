import { useState } from "react";
import style from "./Form.module.css"


const Form = () =>{
    const [form, setForm] = useState({
        name:"",
        dificulty:"",
        duration:"",
        season:"" 
    })

    const changeHandler = (event) =>{
        const property = event.target.name;
        const value = event.target.value;
        
        setForm({...form, [property]:value})
    }

    return(
        <form className={style.activityForm}>        
            <h1>Create new activity</h1>
            <div>
                <label>Activity name: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name"/>
            </div>
                        
            <div>
                <label>Dificulty: </label>
                <input type="text" value={form.dificulty} onChange={changeHandler}  name="dificulty"/>
            </div>
        
            <div>
                <label>Duration: </label>
                <input type="text" value={form.duration} onChange={changeHandler} name="duration"/>
            </div>
            
            <div>
                <label>Season: </label>
                <input type="text"value={form.season} onChange={changeHandler}  name="season"/>
            </div>               
        </form>
       )
}

export default Form;