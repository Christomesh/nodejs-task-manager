
const getAllTasks = (req, res)=>{
    res.json({"message":"get all tasks"})
}

const createTask = (req, res)=>{
    res.json({"message":"create task"})
}
const getTask = (req, res)=>{
    res.json({"id":req.params.id})
}

const updateTask = (req, res)=>{
    res.json({"message":"update task"})
}
const deleteTask = (req, res)=>{
    res.json({"message":"deleted"})
}



module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}