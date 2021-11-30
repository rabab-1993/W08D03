const express = require("express");
const roleRouter = express.Router();

const { creatRole, allRole } = require('../Controllers/role');


roleRouter.get("/", allRole)
roleRouter.post("/register", creatRole)



module.exports = roleRouter;