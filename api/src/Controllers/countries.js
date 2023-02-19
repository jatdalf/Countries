const { Country, Activity } = require('../db');

const getCountriesById = async (id) => await Country.findByPk(id, { include: Activity })

const getAllCountries =  ()=> Country.findAll({include: Activity})


module.exports = { getCountriesById, getAllCountries }