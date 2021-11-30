const taskModel = require('../../db/model/task');




//  new task function
const newTask = (req ,res) => {
    const {user, name} = req.body;
    const newTask = new taskModel({
        name, 
        user
    });

    newTask
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });  
}


// get all tasks function
const allTasks = (req, res) => {
    taskModel
    .find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  }


module.exports = {newTask, allTasks}