const initialState = { Countries: [], allContinents: [], activities: [], details: null, detailsLoaded: false, loading: false, error: '', orderCountries: '', filters: {name: '', continent: 'All', activity: 'All', difficulty: 'All'} };
function applyFilters(state) {
  const f = state.filters;
  const countries = state.allContinents.filter(c =>
    c.name.toLowerCase().includes(f.name.toLowerCase().trim()) &&
    (f.continent === 'All' || c.continent === f.continent) &&
    (f.activity === 'All' || c.activities.some(a => a.name === f.activity)) &&
    (f.difficulty === 'All' || c.activities.some(a => a.dificulty === Number(f.difficulty)))
  );
  const comparators = {az: (a,b) => a.name.localeCompare(b.name), za: (a,b) => b.name.localeCompare(a.name), popAsc: (a,b) => a.population-b.population, popDes: (a,b) => b.population-a.population};
  if (comparators[state.orderCountries]) countries.sort(comparators[state.orderCountries]);
  return {...state, Countries: countries};
}
export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case 'RESET_FILTERS': return applyFilters({...state, orderCountries: '', filters: {...initialState.filters}});
    case 'GET_COUNTRIES': return applyFilters({...state, allContinents: action.payload, error: ''});
    case 'GET_ACTIVITIES':
    case 'POST_ACTIVITY': return {...state, activities: action.payload};
    case 'BY_ID': return {...state, details: action.payload, detailsLoaded: true, error: ''};
    case 'BY_NAME': return applyFilters({...state, filters: {...state.filters, name: action.payload}});
    case 'BY_CONTINENT': return applyFilters({...state, filters: {...state.filters, continent: action.payload}});
    case 'BY_ACTIVITY_NAME': return applyFilters({...state, filters: {...state.filters, activity: action.payload}});
    case 'BY_ACTIVITY_DIFFICULT': return applyFilters({...state, filters: {...state.filters, difficulty: action.payload}});
    case 'ORDER_BY': return applyFilters({...state, orderCountries: action.payload});
    case 'FAILURE': return {...state, error: action.payload};
    default: return state;
  }
}
