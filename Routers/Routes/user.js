const express = require("express");
const userRouter = express.Router();

const {register, logIn, allUser} = require('../Controllers/user');
const authentication = require('../midleware/auth')
const authorization = require('../midleware/outh')

userRouter.post("/register", register);
userRouter.post("/login", logIn);

// just for admin
userRouter.get("/",authentication, authorization, allUser);
userRouter.delete("/",authentication, authorization, allUser);



module.exports = userRouter;