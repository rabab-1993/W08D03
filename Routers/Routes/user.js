const express = require("express");
const userRouter = express.Router();

const {register, logIn, allUser} = require('../Controllers/user')


userRouter.get("/", allUser);
userRouter.post("/register", register);
userRouter.post("/login", logIn);




module.exports = userRouter;