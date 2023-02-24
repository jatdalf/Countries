import { useState } from "react";
import style from "./Form.module.css"
import backgroundImg from "../../Assets/BgCountries.jpg"

const Form = () =>{
    const [form, setForm] = useState({
        name:"",
        dificulty:"",
        duration:"",
        season:"" 
    })

    const [errors, setErrors] = useState ({
        name:"",
        dificulty:"",
        duration:"",
        season:"" 
    })

    const changeHandler = (event) =>{
        const property = event.target.name;
        const value = event.target.value;

        validate({...form, [property]:value})
        
        setForm({...form, [property]:value})
    }

    let regexOnlyLetters= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,20}$/

    const validate = (form)=> {
        if(regexOnlyLetters.test(form.name)){
            setErrors({...errors, name:""})
        }else{
            setErrors({...errors, name:"Only letters (min 3 and max 20 char)"})
        }
        if(form.name==="") setErrors({...errors, name:"cannot be empty"})

    }

    const submitHandler = (event)=>{
        event.preventDefault();
    }

    return(
        <body className={style.activityBody} >
        <form className={style.activityForm} onSubmit={submitHandler}>        
            <h1>Create new activity</h1>
            
            <table className={style.activityTable} >
                <tr>
                    <td className={style.right}>
                        <label>Activity name: </label>
                    </td>
                    <td>
                        <input type="text" value={form.name} onChange={changeHandler} name="name"/>
                        {errors.name && <span>{errors.name}</span>}
                    </td>
                </tr>
                <tr>
                    <td className={style.right}>
                        <label>Dificulty: </label>
                    </td>
                    <td>
                        <select className={style.formSelect} value={form.dificulty} onChange={changeHandler}  name="dificulty">
                        <option value="1">Very Easy</option>
                        <option value="2">Easy</option>
                        <option value="3" selected>Normal</option>
                        <option value="4">Difficult</option>
                        <option value="5">Extreme</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td className={style.right}>
                        <label>Duration (in Hours): </label>
                    </td>
                    <td>
                        <input type="text" value={form.duration} onChange={changeHandler} name="duration"/>
                    </td>
                </tr>  
                <tr>
                    <td className={style.right}>
                        <label>Season: </label>
                    </td>
                    <td>
                    <select className={style.formSelect} value={form.season} onChange={changeHandler}  name="season">
                        <option value="Summer"> Summer </option>
                        <option value="Spring"> Spring </option>
                        <option value="Autumn"> Autumn </option>
                        <option value="Winter"> Winter </option>
                        <option value="All" selected> All </option>
                    </select>
                    </td>
                </tr>          
            </table>                  
            <div><button type="submit">Create activity</button></div>  
        </form>
        </body>
       )
}

export default Form;