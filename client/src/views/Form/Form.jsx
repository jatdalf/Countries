import { useState, useEffect } from "react";
import style from "./Form.module.css"
import backgroundImg from "../../Assets/BgCountries.jpg"
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, postActivity } from "../../Redux/actions";

const Form = () =>{
    const dispatch = useDispatch();    

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
        if(form.name==="") {
            setErrors({...errors, name:"cannot be empty"})        
        }                
    }

    const [bPaises, setBPaises] = useState([])//Paises buscados
    const [countryNames, setCountryNames] = useState([])//nombre de los paises buscados que se van a agregar a la actividad (uso temporal)
    const[newActivity, setNewActivity]= useState({name:"",difficulty:"",duration:"",season:"",countries:[]})
    const[errorsValue, setErrorsValue] = useState({})
    const allCountries = useSelector(state => state.Countries);

    useEffect(()=>{
        dispatch(getCountries())
      },[dispatch])

    function validateForm(){
        let valid = true
        return valid
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        // setErrorsValue(validate(newActivity))
        // const error = validate(newActivity)
        // console.log(validate());
        if(validateForm()){       
            dispatch(postActivity(newActivity))
            // document.Form.reset();            
            alert(`activity added : ${newActivity}`)
            setNewActivity({name:"",difficulty:"",duration:"",season:"",countries:[]})
    // if(Object.values(error).length === 0){
        }else{
            alert("error detected cannot submit")
        }          
    }

    //
    function HandleActivity(event){
        const property = event.target.name;
        const value = event.target.value;
        validate({...form, [property]:value})        
        setForm({...form, [property]:value})
        setNewActivity({...newActivity,[event.target.name]:event.target.value})
      }
    
      function HandleCountry(e){
        setNewActivity({...newActivity,countries:[...newActivity.countries,e.target.value]})
      }
    
      function handleDelete(e){
        setNewActivity({...newActivity,countries: [...newActivity.countries.filter(g=> g !== e)]})
      }
    
      const HandleDispatch=()=>{
        //dispatch(getByName(""))
        dispatch(getCountries())
      }
    //

    
    return(
        <body className={style.activityBody} >
        <form className={style.activityForm} onSubmit={submitHandler}>        
        <h1>Create new activity</h1>
        <table className={style.activityContainer}>
             
        <td>
            <table className={style.activityTable}>
            <tr>                    
                
                <div className={style.center}>
                <select className={style.select} onChange={(e) => { 
                    e.preventDefault(e)
                    HandleCountry(e)}}>
                    <option hidden>Countries</option>
                    {allCountries?.map(c =>{
                    return(
                        <option key={c.name} value={c.name} >{c.name}</option>
                    )
                    })}
                </select>
                </div>
                <p className={style.danger}>{errorsValue.countries}</p>
                
      
      <div className={style.countriesList}>
        <ul className={style.puntitos}>
        {newActivity.countries.map(e => 
          <span key={e}>
          <li>
            <span className={style.lista}>{e}</span>
            <button className={style.closeButton} onClick={()=> handleDelete(e)}>❌</button>
          </li>
          </span>
        )}
        </ul>
      </div>
     
            </tr>            
            <br></br>
            </table>  
        </td>

        <td>
            <br></br>
            <table className={style.activityTable} >
                <br></br>
                <tr>
                    <td className={style.right}>
                        <label>Activity name: </label>
                    </td>
                    <td>
                        {/* <input type="text" value={form.name} onChange={changeHandler} name="name"/> */}
                        <input type="text" value={form.name} onChange={e=> HandleActivity(e)} name="name"/>
                        <br></br>
                        {errors.name && <span className={style.error}>{errors.name}</span>}
                    </td>
                </tr>
                <tr>
                    <td className={style.right}>
                        <label>Dificulty: </label>
                    </td>
                    <td>
                        <select className={style.formSelect} name="dificulty" onChange={e=> HandleActivity(e)}>
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
                        <label>Duration : </label>
                    </td>
                    <td> 
                        <select className={style.formSelect} name="duration" onChange={e=> HandleActivity(e)}>
                        <option value="1" selected>1 Hour</option>
                        <option value="2">2 Hours</option>
                        <option value="3">3 Hours</option>
                        <option value="4">4 Hours</option>
                        <option value="5">5 Hours</option>
                        <option value="5">6 Hours</option>
                        </select>
                    </td>
                </tr>  
                <tr>
                    <td className={style.right}>
                        <label>Season: </label>
                    </td>
                    <td>
                    <select className={style.formSelect} value={form.season} onChange={e=> HandleActivity(e)}  name="season">
                        <option value="Summer"> Summer </option>
                        <option value="Spring"> Spring </option>
                        <option value="Autumn"> Autumn </option>
                        <option value="Winter"> Winter </option>
                        <option value="All" selected> All </option>
                    </select>
                    </td>
                </tr>    <br></br>                      
            </table>

            <tr>
                <tr>  ........................................</tr>
                <td>   </td>
                <td className={style.container}>
                    <button className={style.submitButton} name="Sbutton" type="submit" onClick={submitHandler} />
                </td> .....................................
            </tr>

        </td>   


        </table>
        </form>
        </body>
       )
}

export default Form;