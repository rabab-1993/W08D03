const express = require("express");
const taskRouter = express.Router();


const {newTask, allTasks} = require('../Controllers/task')



// taskRouter.get("/", allRole)
taskRouter.post("/task", newTask)
taskRouter.get("/", allTasks)

module.exports = taskRouter;