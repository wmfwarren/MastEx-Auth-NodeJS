"use strict";

const User = require('../models/user');
const bcrypt = require("bcrypt");

const BC_DIFFICULTY = 5;

module.exports.create = (req, res, err) => {
  const newEmail = req.body.email;
  const password = req.body.password;
  const confirm = req.body.confirmPassword;

    if( password === confirm) {
      User.findOne({email: newEmail})
      .then((user) => {
      if (user){
        return res.render( "index", {msg: "Hey hey youre already here", email: inputEmail});
      } else {
        return new Promise ((resolve, reject) => {
          bcrypt.hash(password, BC_DIFFICULTY, (err, hash) => {
            if (err) res.send(err);
            resolve(hash);
            })
         })
       .then((hash) => {
            res.render("index", {msg: "Good Job! Welcome! Etc!", email: newEmail});
            return User.create({email: newEmail, password: hash})
        })
      }
    })
    }
     else {
        return res.render("index", {msg: "Passwords dont't match :(", email: "person"});
      }
  }
