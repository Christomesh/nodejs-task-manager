const errorHandlerMiddleware = (err, req, res, next)=>{
    res.status(500).send({msg:`Something went wrong, try again later.`})
}

module.exports = errorHandlerMiddleware