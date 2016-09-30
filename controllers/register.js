"use strict";

const User = require('../models/user');
const bcrypt = require("bcrypt");

const BC_DIFFICULTY = 12;

module.exports.create = (req, res, err) => {
  const newEmail = req.body.email;
  const password = req.body.password;
  const confirm = req.body.confirmPassword;

    if( password === confirm) {
      User.findOne({email: newEmail})
      .then((user) => {
      if (user){
        return res.send({msg: "Already registered"});
      } else {
        return new Promise ((resolve, reject) => {
          bcrypt.hash(password, BC_DIFFICULTY, (err, hash) => {
            if (err) res.send(err);
            resolve(hash);
            })
         })
       .then((hash) => {
            res.send({msg: "You exist now!"});
            return User.create({email: newEmail, password: hash})
        })
      }
    })
    }
     else {
        return res.send({msg: "Passwords dont't match :("})
      }
  }
