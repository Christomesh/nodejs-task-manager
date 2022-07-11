const mongoose = require('mongoose')

const connectString = "mongodb+srv://damilare:adgj6789@nodejsexpressproject.5nq2zk7.mongodb.net/TASK_MANAGER?retryWrites=true&w=majority"

const connectDB = (url) =>{
    return mongoose.connect(connectString)
}


module.exports = connectDB
