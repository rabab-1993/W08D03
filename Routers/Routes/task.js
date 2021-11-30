const express = require("express");
const taskRouter = express.Router();


const {newTask} = require('../Controllers/task')



// taskRouter.get("/", allRole)
taskRouter.post("/task", newTask)

module.exports = taskRouter;