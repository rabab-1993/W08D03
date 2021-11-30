const express = require("express");
const taskRouter = express.Router();


const {newTask, allTasks, tasksId} = require('../Controllers/task')



// taskRouter.get("/", allRole)
taskRouter.post("/task", newTask)
taskRouter.get("/", allTasks)
taskRouter.get("/id", tasksId)

module.exports = taskRouter;