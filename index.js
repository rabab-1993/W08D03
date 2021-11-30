const express = require("express");
const dotenv = require("dotenv"); 
dotenv.config();

const mongoose = require("mongoose");
const app = express()

// import all routers
const userRouter = require('./Routers/Routes/user');
app.use("/user", userRouter);
const roleRouter = require('./Routers/Routes/role')
app.use("/role", roleRouter);
const taskRouter = require('./Routers/Routes/task')
app.use("/tasks", taskRouter);

app.use(express.json())

const PORT = process.env.PORT || 4000;


// imported the db file
require("./db/index")





app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})