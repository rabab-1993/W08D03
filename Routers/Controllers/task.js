const taskModel = require('../../db/model/task');




//  new task function
const newTask = (req ,res) => {
    const { name, isDeleted} = req.body;
    const creatTask = new newTask({
        name,
        isDeleted
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
