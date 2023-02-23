import { GET_COUNTRIES, BY_NAME, ORDER_BY } from "./actions";

const initialState = {
    Countries: [],
    orderCountries: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_COUNTRIES:
            return {...state, Countries: action.payload};
        case BY_NAME:
            return {...state, Countries: action.payload};
        case ORDER_BY:
            switch (action.payload){
                case 'az':
                    state.Countries.sort(function (a, b) {
                        if (a.name > b.name) return 1;                    
                        if (b.name > a.name) return -1;                    
                        return 0;
                    }) 
                    return {...state, orderCountries: action.payload};
                case 'za':
                    state.Countries.sort(function (a, b) {
                        if (a.name > b.name) return -1;
                        if (b.name > a.name) return 1;                    
                        return 0;
                    })
                    return {...state, orderCountries: action.payload};   
                case 'popAsc':
                    state.Countries.sort(function (a, b) {
                        if (a.population > b.population) return 1;
                        if (b.population > a.population) return -1;                    
                        return 0;
                    })  
                    return {...state, orderCountries: action.payload};   
                case 'popDes':
                    state.Countries.sort(function (a, b) {
                        if (a.population > b.population) return -1;
                        if (b.population > a.population) return 1;                    
                        return 0;
                    })  
                    return {...state, orderCountries: action.payload};                       
            }       
        default:
            return {...state};
    }
};

export default rootReducer