const {getAllCountries} = require("../Controllers/countries")

const getCountriesHandler = async (req, res)=>{
    const { name } = req.query   //destructuring of query
    //load db in allCountries variable
    const allCountries = await getAllCountries()
    if(name){
        const filterByName = await allCountries.filter(c => c.name.toLowerCase().startsWith(name.toLowerCase()))
        //when filter has results       
        if (filterByName.length > 0){
            return res.status(200).json(filterByName)
        }else{ //when filter has NOT results
            return res.status(404).json({'msg': 'Country Not found'})
        }
    }//if no query name is passed
    return res.status(200).json(allCountries)    
};

module.exports = getCountriesHandler;