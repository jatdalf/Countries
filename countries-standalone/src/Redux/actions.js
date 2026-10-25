import { getLocalCountries, getLocalActivities, saveLocalActivity } from '../services/countries';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const BY_NAME = 'BY_NAME';
export const ORDER_BY = 'ORDER_BY';
export const BY_CONTINENT = 'BY_CONTINENT';
export const BY_ID = 'BY_ID';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const BY_ACTIVITY_DIFFICULT = 'BY_ACTIVITY_DIFFICULT';
export const BY_ACTIVITY_NAME = 'BY_ACTIVITY_NAME';

export const getCountries = () => dispatch => {
  try { dispatch({type: GET_COUNTRIES, payload: getLocalCountries()}); }
  catch (error) { dispatch({type: 'FAILURE', payload: error.message}); }
};
export const getActivities = () => dispatch => {
  try { dispatch({type: GET_ACTIVITIES, payload: getLocalActivities()}); }
  catch (error) { dispatch({type: 'FAILURE', payload: error.message}); }
};
export const postActivity = body => async dispatch => {
  saveLocalActivity(body);
  dispatch({type: POST_ACTIVITY, payload: getLocalActivities()});
  dispatch(getCountries());
};
export const getCountryById = id => dispatch => {
  try {
    const country = getLocalCountries().find(c => c.ID === id.toUpperCase());
    dispatch({type: BY_ID, payload: country || null});
  } catch (error) { dispatch({type: 'FAILURE', payload: error.message}); }
};
export const getCountriesByname = name => ({type: BY_NAME, payload: name});
export const orderBy = payload => ({type: ORDER_BY, payload});
export const ByContinent = payload => ({type: BY_CONTINENT, payload});
export const byActivity = payload => ({type: BY_ACTIVITY_DIFFICULT, payload});
export const byActivityName = payload => ({type: BY_ACTIVITY_NAME, payload});
