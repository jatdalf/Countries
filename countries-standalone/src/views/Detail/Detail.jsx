import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getCountryById } from '../../Redux/actions';
import style from './Detail.module.css';
import backgroundImage from '../../Assets/detailsBg.jpg';
const numberFormat = new Intl.NumberFormat('es-AR', {maximumFractionDigits: 2});
const formatNumber = value => value !== null && value !== undefined && value !== '' && Number.isFinite(Number(value)) ? numberFormat.format(Number(value)) : 'Not available';

const Detail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {details, detailsLoaded, error} = useSelector(state => state);
  const [activityId, setActivityId] = useState('');
  useEffect(() => { setActivityId(''); dispatch(getCountryById(id)); }, [dispatch, id]);
  const pageStyle = {backgroundImage: `url(${backgroundImage})`};
  if (error) return <main className={style.page} style={pageStyle}><p className={style.message} role="alert">{error}</p></main>;
  if (!detailsLoaded) return <main className={style.page} style={pageStyle}><p className={style.message}>Loading country…</p></main>;
  if (!details || details.ID !== id.toUpperCase()) return <main className={style.page} style={pageStyle}><p className={style.message}>Country not found.</p></main>;
  const activities = details.activities || [];
  const activity = activities.find(a => a.id === activityId);
  return (
    <main className={style.page} style={pageStyle}>
      <div className={style.layout}>
        <section className={style.country} aria-labelledby="country-name">
          <header className={style.heading}>
            <div className={style.identity}>
              <span className={style.eyebrow}>COUNTRY PROFILE / {details.ID}</span>
              <h1 id="country-name" className={style.title}>{details.name}</h1>
              <p className={style.region}>{details.continent} · {details.subregion || 'Not available'}</p>
            </div>
            <div className={style.flagFrame}><img className={style.flag} src={details.flag_img} alt={`Flag of ${details.name}`} /></div>
          </header>
          <dl className={style.facts}>
            {[['Continent', details.continent], ['Capital', details.capital], ['Subregion', details.subregion || 'Not available'], ['Country code', details.ID], ['Population', formatNumber(details.population)], ['Area', `${formatNumber(details.area)} km²`]].map(([label,value]) => (
              <div className={style.fact} key={label}><dt>{label}</dt><dd>{value || 'Not available'}</dd></div>
            ))}
          </dl>
          <p className={style.dataNote}>Country figures come from the demo’s historical dataset.</p>
        </section>

        <section className={style.activities} aria-labelledby="activities-title">
          <header className={style.activityHeader}><span className={style.eyebrow}>EXPLORE & PLAN</span><span className={style.count}>{activities.length} saved</span></header>
          <h2 id="activities-title" className={style.sectionTitle}>Activities</h2>
          {activities.length ? <>
            <label htmlFor="detail-activity" className={style.label}>Choose an activity</label>
            <select id="detail-activity" className={style.select} value={activityId} onChange={event => setActivityId(event.target.value)}>
              <option value="">Select an activity…</option>
              {activities.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
            </select>
            {activity ? <dl className={style.activityFacts}>
              <div><dt>Activity</dt><dd>{activity.name}</dd></div>
              <div><dt>Difficulty</dt><dd>{activity.dificulty} / 5</dd></div>
              <div><dt>Duration</dt><dd>{activity.duration} {activity.duration === 1 ? 'hour' : 'hours'}</dd></div>
              <div><dt>Season</dt><dd>{activity.season}</dd></div>
            </dl> : <p className={style.empty}>Select an activity to see its difficulty, duration and season.</p>}
          </> : <div className={style.empty}><span className={style.emptyMark} aria-hidden="true">＋</span><p>No activities here yet.</p><span>Add an idea for your next adventure.</span></div>}
          <Link className={style.createLink} to="/Form">Create activity <span aria-hidden="true">↗</span></Link>
          <p className={style.storageNote}>Saved in this browser.</p>
        </section>
      </div>
    </main>
  );
};
export default Detail;
