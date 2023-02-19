const { Country, Activity } = require('../db');

const createActivity =  (name, dificulty, duration, season, idCountries)=> {    
    let newActivity =  Activity.create({name:name, dificulty, duration, season});
    newActivity.setCountries(idCountries);
    return newActivity
}
    
const getAllActivitys =  ()=> Activity.findAll({include: {model:Country, attributes:["ID"]}})
// const getAllActivitys =  ()=> (Activity.findAll({include: Country})).map((elem) => {
//     return {ID: elem.ID,}
// })

const getAllActivitys2 =  ()=> {
    const allActivities = Activity.findAll({ include: {model: Country, attributes:["ID"] } })
    //filtro para el front que trae todas las actividades
    const filterA = allActivities.map(e => e.name.toLowerCase())
    const total = filterA.filter((item, index) => {
        return filterA.indexOf(item) === index;
    })
    res.json(total)
}

module.exports = { createActivity, getAllActivitys, getAllActivitys2}