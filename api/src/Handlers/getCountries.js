const { Country, Activity } = require('../db');

const getCountriesHandler = async (req, res)=>{
    const { name } = req.query   
    //load db in allCountries variable
    const allCountries = await Country.findAll({include: Activity})
    console.log(name);    
    if(name){
        const filterByName = await allCountries.filter(c => c.name.toLowerCase().startsWith(name.toLowerCase()))
        //when filter has results       
        if (filterByName.length > 0){
            return res.status(200).json(filterByName)
        }else{ //when filter has NOT results
            return res.status(404).send({'msg': 'Country Not found'})
        }
    }//if no query name is passed
    return res.status(200).json(allCountries)    
};

module.exports = getCountriesHandler;