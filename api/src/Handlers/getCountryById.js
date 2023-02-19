const { Country, Activity } = require('../db');
//const getCountriesById = require ("../Controllers/countries")

const getCountryByIdHandler = async (req, res)=> {
    try {
        const {id} = req.params; 
        let country = await Country.findByPk(id, { include: Activity })
        //let country = getCountriesById(id)
        res.status(200).json(country)    
    } catch (error) {
        res.status(400).json({error:error.message})
    }    
}

module.exports= getCountryByIdHandler