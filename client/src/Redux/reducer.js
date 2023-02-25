import { GET_COUNTRIES, BY_NAME, ORDER_BY, BY_CONTINENT, BY_ID, LOADING } from "./actions";

const initialState = {
    Countries: [],
    orderCountries: [],
    allContinents: [],
    details:[],
    loading: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_COUNTRIES:
            return {...state, 
                Countries: action.payload, 
                allContinents: action.payload};            
        case BY_NAME:
            return {...state, Countries: action.payload};
        case BY_CONTINENT:
            const allContinents = state.allContinents;
            const continentFilter = action.payload === 'All' ? allContinents :
                allContinents.filter(cont => cont.continent === action.payload)
            return {
                ...state,
                Countries: continentFilter}
        case BY_ID:
            return {
                ...state,
                details: action.payload,
                loading: false
            }
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
                default: break;
            }       
        case LOADING:
                return {
                    ...state,
                    loading: true
                }
        default:
            return {...state};
    }
};

export default rootReducer