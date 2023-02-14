const { Router } = require('express');
const countryRouter = Router();
const { Country, Activity } = require('../db');

countryRouter.get('/', async (req , res)=>{
    //capture name if passed trought query
    const { name } = req.query
    //load db in allCountries variable
    const allCountries = await Country.findAll({include: Activity})
    try {
        //case name is passed by query
        if(name){
            const filterByName = await allCountries.filter(c => c.name.toLowerCase().startsWith(name.toLowerCase()))
            //when filter has results
            if (filterByName.length > 0){
                res.status(200).json(filterByName)
            }else{ //when filter has NOT results
                res.status(404).send({'msg': 'Country Not found'})
            }
        }//if no query
        res.status(200).json(json(allCountries))    
    } catch (error) {
        console.log(error)
    }    
    }
);

countryRouter.post("/", (req, res)=>(
    res.status(200).send("sin implementar: ruta para el POST de countrys")
));

countryRouter.put("/", (req, res)=>(
    res.status(200).send("sin implementar: ruta para el PUT de countrys")
));

countryRouter.delete("/", (req, res)=>(
    res.status(200).send("sin implementar: ruta para el DELETE de countrys")
));


module.exports = countryRouter;