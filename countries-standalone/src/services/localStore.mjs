export const STORAGE_KEY = 'countries-portfolio:activities:v1';

export function readActivities(storage, countryIds) {
  const raw = storage.getItem(STORAGE_KEY);
  if (!raw) return [];
  let parsed;
  try { parsed = JSON.parse(raw); } catch { throw new Error('Saved activities could not be read. No data was overwritten.'); }
  if (!Array.isArray(parsed) || parsed.some(a => !a || typeof a.id !== 'string' || typeof a.name !== 'string' || !Array.isArray(a.idCountries) || a.idCountries.some(id => !countryIds.has(id)) || !Number.isInteger(a.dificulty) || a.dificulty < 1 || a.dificulty > 5 || !Number.isInteger(a.duration) || a.duration < 1 || a.duration > 6 || !['Summer','Spring','Autumn','Winter','All'].includes(a.season))) {
    throw new Error('Saved activities have an unsupported format. No data was overwritten.');
  }
  return parsed;
}

export function createActivity(body, existing, countryIds, id) {
  const name = String(body.name || '').trim();
  const ids = [...new Set(body.idCountries || [])];
  const dificulty = Number(body.dificulty);
  const duration = Number(body.duration);
  if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,20}$/.test(name)) throw new Error('Use 3–20 letters for the activity name.');
  if (!ids.length || ids.some(value => !countryIds.has(value))) throw new Error('Select at least one valid country.');
  if (!Number.isInteger(dificulty) || dificulty < 1 || dificulty > 5 || !Number.isInteger(duration) || duration < 1 || duration > 6) throw new Error('Check difficulty and duration.');
  if (!['Summer','Spring','Autumn','Winter','All'].includes(body.season)) throw new Error('Select a valid season.');
  if (existing.some(a => a.name.toLowerCase() === name.toLowerCase())) throw new Error('An activity with that name already exists.');
  return {id, name, dificulty, duration, season: body.season, idCountries: ids};
}
