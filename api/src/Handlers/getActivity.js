const { Country, Activity } = require('../db');
const {getAllActivitys} = require ("../Controllers/Activity")

const getActivity = async (req, res)=>{
    try {
        const allActivitys = await getAllActivitys()
        res.status(200).json(allActivitys)
    } catch (error) {
        res.status(400).json({error:error.message})
    }    
}


module.exports = getActivity