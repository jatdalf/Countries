import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES"

export const getCountries = ()=>{
    return async function(dispatch){
        const countryData = await axios.get(
            "http://localhost:3001/countries"
        );
        const countries = countryData.data
        dispatch({type: GET_COUNTRIES, payload: countries});
    };
};
