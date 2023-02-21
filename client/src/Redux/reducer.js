import { GET_COUNTRIES } from "./actions";

const initialState = {
    Countries: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_COUNTRIES:
            return {...state, Countries: action.payload};
        default:
            return {...state};
    }
};

export default rootReducer