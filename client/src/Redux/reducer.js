import { GET_COUNTRIES, 
        BY_NAME, ORDER_BY, 
        BY_CONTINENT, 
        BY_ID, 
        GET_ACTIVITIES, 
        BY_ACTIVITY_DIFFICULT,
        BY_ACTIVITY_NAME,
        POST_ACTIVITY } from "./actions";

const initialState = {
    Countries: [],
    orderCountries: [],
    allContinents: [],
    continentFilter:[],
    details:[],    
    activities: [],
    activityFilter:[],
    loading: false,   
    countryNames: [], 
    error:[]
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
                default: 
                break;
            }break;       
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            }
        case POST_ACTIVITY:
            return {
                ...state,
                activities: action.payload,
            }
        case BY_ACTIVITY_DIFFICULT: //not implemented yet
            // const allActivities = state.activities;            
            // const activityFilter = allActivities.filter(a => a.activities.find((e) => e.dificulty === action.payload))
            // console.log(activityFilter);
            return {
                ...state,                
                //Countries: activityFilter
            }
        case BY_ACTIVITY_NAME:
            const activityName = state.activities            
            const AllCount = state.Countries
            const filter = action.payload ==="All" ? 
                           AllCount : 
                           activityName.filter(a=>a.name===action.payload)[0].countries.map(e=>e)
            return {
                ...state,                
                Countries: filter
            }

        default:
            return {...state};
    }
};

export default rootReducer