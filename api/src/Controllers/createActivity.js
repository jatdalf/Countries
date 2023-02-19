const { Country, Activity } = require('../db');

const createActivity = async (name, dificulty, duration, season)=> 
    await Activity.create(name, dificulty, duration, season)

module.exports = createActivity