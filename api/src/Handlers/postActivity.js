const createActivity = require("../Controllers/createActivity")

const postActivity = (req, res) => {
    try {
        const {name, dificulty, duration, season } = req.body;            
        const newActivity = createActivity(name, dificulty, duration, season);    
        res.status(201).json(newActivity)
    } catch (error) {
        res.status(400).json({error:error.message})
    }    
}

module.exports = postActivity;