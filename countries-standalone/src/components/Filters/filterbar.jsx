import { useDispatch, useSelector } from 'react-redux';
import { orderBy, getCountriesByname, ByContinent, byActivityName } from '../../Redux/actions';
import style from './filter.module.css';
const continents = ['Africa','Antarctica','Asia','Europe','North America','Oceania','South America'];
const Filterbar = () => {
 const dispatch = useDispatch();
 const {activities, filters, orderCountries, Countries} = useSelector(state => state);
 return <section className={style.filterContainer} aria-label="Country filters">
  <label className={style.field}>Search country<input name="contryName" type="search" placeholder="Country name…" value={filters.name} onChange={e=>dispatch(getCountriesByname(e.target.value))}/></label>
  <label className={style.field}>Continent<select value={filters.continent} onChange={e=>dispatch(ByContinent(e.target.value))}><option value="All">All continents</option>{continents.map(c=><option key={c}>{c}</option>)}</select></label>
  <label className={style.field}>Activity<select value={filters.activity} onChange={e=>dispatch(byActivityName(e.target.value))}><option value="All">All activities</option>{activities.map(a=><option key={a.id} value={a.name}>{a.name}</option>)}</select></label>
  <label className={style.field}>Sort by<select value={orderCountries} onChange={e=>dispatch(orderBy(e.target.value))}><option value="">Original order</option><option value="az">Name: A → Z</option><option value="za">Name: Z → A</option><option value="popAsc">Population: low → high</option><option value="popDes">Population: high → low</option></select></label>
  <div className={style.summary}><span role="status">{Countries.length} countries</span><button type="button" onClick={()=>dispatch({type:'RESET_FILTERS'})}>Clear filters</button></div>
 </section>;
};
export default Filterbar;
