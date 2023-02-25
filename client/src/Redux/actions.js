import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES"
export const BY_NAME = "BY_NAME"
export const ORDER_BY = "ORDER_BY"
export const BY_CONTINENT = "BY_CONTINENT"
export const BY_ID = "BY_ID"
export const LOADING = "LOADING"

export const getCountries = ()=>{
    return async function(dispatch){
        const countryData = await axios.get(`/countries`);
        const countries = countryData.data
        dispatch({type: GET_COUNTRIES, payload: countries});
    };
};

export const getCountriesByname = (name)=>{
    return async function(dispatch){
        try {
            const countryData = await axios.get(`/countries?name=${name}`);
            const countries = countryData.data
            dispatch({type: "BY_NAME", payload: countries});
        } catch (error) {
            return dispatch({
                type: "FAILURE",
                payload: error.response.data.msg
            })
        }       
    };
};

export function orderBy(payload) {
    return {
        type: ORDER_BY,
        payload
    }
}

export function ByContinent(payload){
    return {
        type: BY_CONTINENT,
        payload
    }   
}

export function getCountryById(ID){
    return async function (dispatch) {
        try {
            dispatch({
                type: LOADING
            })
            const res = await axios.get(`/countries/${ID}`)
            return dispatch({
                type: BY_ID,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}