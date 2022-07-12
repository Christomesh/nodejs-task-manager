const {CustomErrorAPI} = require('../error/custom-error')

const errorHandlerMiddleware = (err, req, res, next)=>{
    if (err instanceof CustomErrorAPI){
        return res.status(err.statusCode).send({msg: err.message})
    }
    return res.status(500).send({msg:`Something went wrong, try again later.`})
}

module.exports = errorHandlerMiddleware