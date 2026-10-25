import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {readActivities, createActivity, STORAGE_KEY} from '../src/services/localStore.mjs';
const countries = JSON.parse(readFileSync(new URL('../src/data/countries.json', import.meta.url)));
const ids = new Set(countries.map(c => c.ID));
const body = {name:'Hiking', dificulty:'3', duration:'2', season:'Summer', idCountries:['ARG','ARG','CHL']};
test('snapshot has complete unique records and countries needed by the demo', () => {
 assert.equal(ids.size,250);
 for(const c of countries) {assert.match(c.ID,/^[A-Z]{3}$/); assert.ok(c.name && c.capital && c.continent); assert.ok(Number.isFinite(c.population)); assert.match(c.flag_img,/^https:\/\//);}
 assert.ok(ids.has('ARG'));
});
test('activity survives storage round trip and deduplicates countries', () => {
 const activity=createActivity(body,[],ids,'demo-id');
 assert.deepEqual(activity.idCountries,['ARG','CHL']);
 const storage={getItem:key=>key===STORAGE_KEY?JSON.stringify([activity]):null};
 assert.deepEqual(readActivities(storage,ids),[activity]);
 assert.equal(activity.dificulty,3);
});
test('reject invalid activities and preserve corrupted storage', () => {
 assert.throws(()=>createActivity({...body,idCountries:['XXX']},[],ids,'a'));
 assert.throws(()=>createActivity({...body,duration:7},[],ids,'a'));
 assert.throws(()=>createActivity(body,[{name:'hiking'}],ids,'a'));
 assert.throws(()=>readActivities({getItem:()=>'{broken'},ids),/No data was overwritten/);
});
test('filters combine and sorting preserves original country order', async () => {
 const source=readFileSync(new URL('../src/Redux/reducer.js',import.meta.url),'utf8');
 const {default: reducer}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
 const records=[{ID:'CHL',name:'Chile',continent:'South America',population:10,activities:[]},{ID:'ARG',name:'Argentina',continent:'South America',population:20,activities:[{name:'Hiking',dificulty:3}]},{ID:'CAN',name:'Canada',continent:'North America',population:30,activities:[]}];
 let state=reducer(undefined,{type:'GET_COUNTRIES',payload:records});
 state=reducer(state,{type:'ORDER_BY',payload:'az'});
 assert.deepEqual(records.map(c=>c.ID),['CHL','ARG','CAN']);
 state=reducer(state,{type:'BY_CONTINENT',payload:'South America'});
 state=reducer(state,{type:'BY_ACTIVITY_NAME',payload:'Hiking'});
 assert.deepEqual(state.Countries.map(c=>c.ID),['ARG']);
 state=reducer(state,{type:'BY_NAME',payload:'xyz'});assert.equal(state.Countries.length,0);
});
