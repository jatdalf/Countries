import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getActivities, postActivity } from '../../Redux/actions';
import style from './Form.module.css';
const initialForm = {name:'', dificulty:'1', duration:'1', season:'Summer', idCountries:[]};
const difficulties = ['Very easy','Easy','Normal','Difficult','Extreme'];
const Form = () => {
 const dispatch = useDispatch();
 const {allContinents:countries, activities, error:storageError} = useSelector(state=>state);
 const [form,setForm] = useState(initialForm);
 const [search,setSearch] = useState('');
 const [error,setError] = useState('');
 const [success,setSuccess] = useState('');
 const [saving,setSaving] = useState(false);
 useEffect(()=>{dispatch(getCountries());dispatch(getActivities());},[dispatch]);
 const change = event => {const {name,value}=event.target;setForm(current=>({...current,[name]:value}));setError('');setSuccess('');};
 const toggleCountry = id => {setForm(current=>({...current,idCountries:current.idCountries.includes(id)?current.idCountries.filter(value=>value!==id):[...current.idCountries,id]}));setError('');setSuccess('');};
 const visibleCountries = countries.filter(country=>country.name.toLowerCase().includes(search.trim().toLowerCase()));
 const selected = countries.filter(country=>form.idCountries.includes(country.ID));
 const submit = async event => {
  event.preventDefault();if(saving)return;setError('');setSuccess('');
  if(!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,20}$/.test(form.name.trim())){setError('Use 3–20 letters for the activity name.');return;}
  if(!form.idCountries.length){setError('Select at least one country.');return;}
  setSaving(true);
  try {await dispatch(postActivity(form));setSuccess(`“${form.name.trim()}” saved for ${form.idCountries.length} ${form.idCountries.length===1?'country':'countries'}.`);setForm({...initialForm,idCountries:[]});setSearch('');}
  catch(err){setError(err.message || 'The activity could not be saved.');}
  finally{setSaving(false);}
 };
 return <main className={style.page}>
  <div className={style.container}>
   <header className={style.heading}><span className={style.eyebrow}>PLAN YOUR NEXT ADVENTURE</span><h1 className={style.title}>Make it an experience.</h1><p className={style.subtitle}>Create an activity, choose its countries, and keep your ideas together.</p></header>
   <form className={style.layout} onSubmit={submit}>
    <section className={style.panel} aria-labelledby="destinations-title">
     <div className={style.panelHeader}><div><span className={style.step}>01 / DESTINATIONS</span><h2 id="destinations-title" className={style.sectionTitle}>Where will you go?</h2></div><span className={style.badge}>{selected.length} selected</span></div>
     <label className={style.field}>Find a country<input className={style.input} type="search" placeholder="Search destinations…" value={search} onChange={e=>setSearch(e.target.value)} /></label>
     <div className={style.countryList} role="group" aria-label="Select countries">{visibleCountries.map(country=><label className={`${style.countryRow} ${form.idCountries.includes(country.ID)?style.selected:''}`} key={country.ID}><input type="checkbox" checked={form.idCountries.includes(country.ID)} onChange={()=>toggleCountry(country.ID)}/><span className={style.countryName}>{country.name}</span><span className={style.countryCode}>{country.ID}</span></label>)}{!visibleCountries.length && <p className={style.empty}>No countries match your search.</p>}</div>
     <div className={style.selectedList} aria-label="Selected destinations">{selected.length ? selected.map(country=><button key={country.ID} type="button" className={style.chip} onClick={()=>toggleCountry(country.ID)} aria-label={`Remove ${country.name}`}>{country.name}<span aria-hidden="true">×</span></button>) : <p className={style.hint}>Choose one or more countries from the list.</p>}</div>
    </section>
    <section className={style.panel} aria-labelledby="activity-title">
     <div className={style.panelHeader}><div><span className={style.step}>02 / THE EXPERIENCE</span><h2 id="activity-title" className={style.sectionTitle}>What’s the plan?</h2></div></div>
     <div className={style.fields}>
      <label className={style.field}>Activity name<input className={style.input} id="acName" type="text" name="name" placeholder="Hiking, kayaking, sightseeing…" value={form.name} onChange={change} required maxLength={20}/><span className={style.hint}>3–20 letters. Choose a unique name.</span></label>
      <div className={style.fieldGrid}>
       <label className={style.field}>Difficulty<select className={style.input} name="dificulty" value={form.dificulty} onChange={change}>{difficulties.map((name,index)=><option key={name} value={index+1}>{index+1} — {name}</option>)}</select></label>
       <label className={style.field}>Duration<select className={style.input} name="duration" value={form.duration} onChange={change}>{[1,2,3,4,5,6].map(hours=><option key={hours} value={hours}>{hours} {hours===1?'hour':'hours'}</option>)}</select></label>
      </div>
      <label className={style.field}>Season<select className={style.input} name="season" value={form.season} onChange={change}>{['Summer','Spring','Autumn','Winter','All'].map(season=><option key={season} value={season}>{season==='All'?'All year round':season}</option>)}</select></label>
      {(error || storageError) && <p className={style.error} role="alert">{error || storageError}</p>}
      {success && <p className={style.success} role="status">{success}</p>}
      <button className={style.submit} type="submit" disabled={saving || Boolean(storageError)}>{saving?'Saving…':'Create activity'}<span aria-hidden="true">↗</span></button>
     </div>
     <p className={style.storageNote}>Saved in this browser · {activities.length} {activities.length===1?'activity':'activities'} in your collection.</p>
    </section>
   </form>
  </div>
 </main>;
};
export default Form;
