const express = require("express");
const taskRouter = express.Router();

const {
  newTask,
  allTasks,
  tasksId,
  updateTask,
  deleteTask,
  isDeletedTask
} = require("../Controllers/task");

// taskRouter.get("/", allRole)
taskRouter.post("/task", newTask);
taskRouter.get("/", allTasks);
taskRouter.get("/id", tasksId);
taskRouter.get("/isdeleted", isDeletedTask);
taskRouter.put("/update", updateTask);
taskRouter.delete("/delete", deleteTask);

module.exports = taskRouter;
