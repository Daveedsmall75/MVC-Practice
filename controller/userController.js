const database = require('../model/database.json')

const homepage = (req, res)=>{
    res.status(200).json({
        "message": "welcome to my homepage"
    })
}