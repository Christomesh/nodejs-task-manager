const { application } = require("express")
const express = require("express")
const router = express.Router()

const {getAllTasks, createTask, getTask, updateTask, deleteTask} =  require('../controllers/tasks')


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

// ALTERNATIVE METHOD FOR ROUTING

// router.get('/', getAllTasks)
// router.post('/', createTask)
// router.get('/:id', getTask)
// router.patch("/:id", updateTask)
// router.delete("/:id", deleteTask)



module.exports = router


