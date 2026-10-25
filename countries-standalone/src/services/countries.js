import dataset from '../data/countries.json';
import { STORAGE_KEY, readActivities, createActivity } from './localStore.mjs';
const ids = new Set(dataset.map(c => c.ID));
const read = () => readActivities(window.localStorage, ids);
export function getLocalCountries() {
  const activities = read();
  return dataset.map(country => ({...country, activities: activities.filter(a => a.idCountries.includes(country.ID)).map(({idCountries, ...activity}) => activity)}));
}
export function getLocalActivities() {
  return read().map(activity => ({...activity, countries: dataset.filter(c => activity.idCountries.includes(c.ID)).map(c => ({...c}))}));
}
export function saveLocalActivity(body) {
  const existing = read();
  const id = window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const activity = createActivity(body, existing, ids, id);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, activity]));
  return activity;
}
