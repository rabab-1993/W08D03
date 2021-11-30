const express = require("express");
const taskRouter = express.Router();


const {newTask, allTasks, tasksId, updateTask} = require('../Controllers/task')



// taskRouter.get("/", allRole)
taskRouter.post("/task", newTask)
taskRouter.get("/", allTasks)
taskRouter.get("/id", tasksId)
taskRouter.get("/id", tasksId)
taskRouter.put("/update", updateTask)

module.exports = taskRouter;