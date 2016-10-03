"use strict";

const User = require("../models/user.js")
const bcrypt = require("bcrypt");

module.exports.create = (req, res) => {
  const inputEmail = req.body.email;
  const inputPassword = req.body.password;

  User.findOne({email: inputEmail})
  .then ((user) => {
    console.log(user);
    if(user){
      console.log("IF DONE GONE FIRED");
      console.log("USERPW", user.password);
      console.log("Typed PW", inputPassword);
      return new Promise ((resolve, reject) => {
      console.log("Promise DONE GONE FIRED");
        bcrpyt.compare(inputPassword, user.password, (err, matches) => {
          console.log("Compare fired");
          if(err) {
            reject(err);
          } else {
            resolve(matches);
          }
        })
      })
      .then((matches) => {
        if(matches){
          session.email = inputEmail;
          res.send({msg: "Good News everybody"});
        } else {
          res.send({msg: "you meesed up something, try again!"});
        }
      })
      .catch(err)
  } else {
      res.send({msg: "No such email"});
    }
  })
}
