const { createActivity } = require("../Controllers/Activity")

const postActivityHandler = async (req, res) => {
    try {
        const {name, dificulty, duration, season, idCountries } = req.body;            
        const newActivity = await createActivity(name, dificulty, duration, season, idCountries);    
        res.status(201).json({newActivity})
    } catch (error) {
        res.status(400).json({error:error.message})
    }    
}

module.exports = postActivityHandler;