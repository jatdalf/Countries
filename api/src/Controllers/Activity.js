const { Country, Activity } = require('../db');

const createActivity = async (name, dificulty, duration, season, idCountries)=> {    
    let newActivity = await Activity.create({name:name, dificulty, duration, season});
    await newActivity.addCountry(idCountries);
    return newActivity
}
    
const getAllActivitys = async ()=> await Activity.findAll({include : Country})

module.exports = { createActivity, getAllActivitys}