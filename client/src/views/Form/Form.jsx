import { useState, useEffect } from "react";
import style from "./Form.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, postActivity } from "../../Redux/actions";

const Form = () =>{
    const dispatch = useDispatch();      
    //data fot post activity
    const [dataForm, setDataForm] = useState({
        name: "",
        dificulty: "1",
        duration: "1",
        season: "Summer",
        idCountries: [],
        flag:[],
        countryNames: []
      });
    //data reset 
    const stateReset = () => {
        setDataForm({
          name: "",
          dificulty: "1",
          duration: "1",
          season: "Summer",
          idCountries: [],
          flag:[],
          countryNames: []
        })
    };
    //Handlers
    const setDataHandler = (e) => {
        const htmlTag = e.target.name
        const activityValue = e.target.value       
        validate({...dataForm, [htmlTag]:activityValue})  
        setDataForm({...dataForm,[htmlTag]:activityValue})        
    };  
    
    function HandleCountry(e){      
    const id= (e.target.value)        
    // setDataForm({...dataForm,idCountries:[...dataForm.idCountries,id]})
    setDataForm({...dataForm,
        idCountries:[...dataForm.idCountries,id],
        countryNames:[...dataForm.countryNames,document.getElementById(id).innerText]})
        //console.log(dataForm);
    }

    function handleDelete(e){                        
    setDataForm({...dataForm,
        idCountries:[...dataForm.idCountries.filter(g=> g !== e)],
        countryNames:[...dataForm.countryNames.filter(n=> n !== document.getElementById(e).innerText)],
       })       
    }
    
    const [errors, setErrors] = useState ({
        name:"",
        difficulty:"",
        duration:"",
        season:"" 
    })

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

    const submitForm = (e) => {
        try {
            e.preventDefault();
            const activityText = dataForm.name.trim()            
            var form = true;                        
            if (!dataForm["idCountries"].length >= 1)form = false; //if no countries are selected
            if (!regexOnlyLetters.test(activityText))form = false; //if no regex validate
            if (form) {
                alert(`Activity "${dataForm.name}" added`)
                dispatch(postActivity(dataForm))                                
                  .then(() => stateReset())                                  
                window.location.reload();
            } else {
            return alert("Please fill all the fields \nname may not contain numbers\ncheck at least one country is added\nbefore creating a new activity");
            }    
        } catch (error) {
            alert({error:error.message})
        }        
    };

    // const[errorsValue, setErrorsValue] = useState({})
    const[errorsValue] = useState({})
    const allCountries = useSelector(state => state.Countries);

    useEffect(()=>{
        dispatch(getCountries())
      },[dispatch])
    
    return(
        <body className={style.activityBody} >
        <form id="ActivityForm" className={style.activityForm} onSubmit={(e) => submitForm(e)}>        
            <h1>Create new activity</h1>
        <table className={style.activityContainer}>
             
            <td>
                <table className={style.activityTable}>
                <tr>Select the countries:
                    
                    <div className={style.center}>
                    <select onChange={(e)=>{HandleCountry(e)}}>
                        <option hidden>Countries</option>
                        {allCountries?.map(c =>{
                        return(
                            <option key={c.ID} id={c.ID} value={c.ID}>{c.name}</option>
                            //Esta linea carga los paises por nombre en lugar de por id
                           // <option key={c.ID} id={c.ID} value={c.name} >{c.name}</option>
                        )
                        })}
                    </select>
                    </div>
                    <p className={style.danger}>{errorsValue.countries}</p>
                    
        
        <div className={style.countriesList}>
            {/* <ul className={style.puntitos}>{dataForm.countryNames.map(e =>  */}
            <ul className={style.puntitos}>{dataForm.idCountries.map(e => 
            <span key={e}>
            <li>
                {/* <img className={style.MiniFlagImg} src={countries.id(e)} alt={"mini_flag_img"}/> */}
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
                            <input id="acName" type="text" value={dataForm.name} placeholder="Name your activity" onChange={e=> setDataHandler(e)} name="name"/>
                            <br></br>
                            {errors.name && <span className={style.error}>{errors.name}</span>}
                        </td>
                    </tr>
                    <tr>
                        <td className={style.right}>
                            <label>Difficulty: </label>
                        </td>
                        <td>
                            <select className={style.formSelect} name="dificulty" text="select difficulty" onChange={e=> setDataHandler(e)}>
                            <option value="1">Very Easy</option>
                            <option value="2">Easy</option>
                            <option value="3" defaultValue>Normal</option>
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
                            <select className={style.formSelect} name="duration" onChange={e=> setDataHandler(e)}>
                            <option value="1" defaultValue>1 Hour</option>
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
                        <select className={style.formSelect} value={dataForm.season} onChange={e=> setDataHandler(e)}  name="season">
                            <option value="Summer"> Summer </option>
                            <option value="Spring"> Spring </option>
                            <option value="Autumn"> Autumn </option>
                            <option value="Winter"> Winter </option>
                            <option value="All" defaultValue> All </option>
                        </select>
                        </td>
                    </tr>    
                    <br></br>                      
                </table>

                <tr>
                    <tr>  ........................................</tr>
                    <td>   </td>
                    <td className={style.container}>
                        <button className={style.submitButton} name="Sbutton" type="submit" onClick={submitForm} />
                    </td> .....................................
                </tr>

            </td>

        </table>
        </form>
        </body>
       )
}

export default Form;