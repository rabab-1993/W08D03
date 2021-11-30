const userModel = require("../../db/model/user");
const dotenv = require("dotenv"); 
dotenv.config();

const jwt = require("jsonwebtoken");
const SECRETKEY = process.env.SECRETKEY;

//bcrypt > library to hash passwords.
const bcrypt = require("bcrypt");
const SALT = Number(process.env.SALT);

// Register function
const register = async (req, res) => {
const {email, password, role} = req.body;
const savePass = await bcrypt.hash(password, SALT);
const creatUser = new userModel({
        email,
        password: savePass,
        role
    });

    creatUser
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });  
}


// LogIn function

const logIn = (req, res) => {
    const { email, password} = req.body;
    userModel
    .findOne(email)
    .then(async (result) => {
      if (result) {
        if (saveEmail == result.email) {
          
          const savePass = await bcrypt.compare(password, result.password); 
          if (savePass) {
            const payload = {
              role: result.role,
            };
            const token = await jwt.sign(payload, SECRETKEY); 
            res.status(200).json({ result, token });
          } else {
            res.status(400).json("invalid email or password");
          }
        } else {
          res.status(400).json("invalid email or password");
        }
      } else {
        res.status(404).json("not found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};


module.exports = {register, logIn};