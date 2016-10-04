"use strict";

const User = require("../models/user.js")
const bcrypt = require("bcrypt");

module.exports.create = (req, res) => {
  const inputEmail = req.body.email;
  const inputPassword = req.body.password;

  User.findOne({email: inputEmail})
  .then ((user) => {
    if(user){
      return new Promise ((resolve, reject) => {
        bcrypt.compare(inputPassword, user.password, (err, matches) => {
          if(err) {
            reject(err);
          } else {
            resolve(matches);
          } //end of if else
        }) //end of compare method
      }) //end of new promise
      .then((matches) => {
        if(matches){
          req.session.email = inputEmail;
          res.send({msg: "Good News everybody"});
        } else {
          res.send({msg: "you meesed up something, try again!"});
        } //end of if else
      }) //end of the then for the mathing promise
      .catch(err) //catch bcrpyt.comapre errs
  } else {
      res.send({msg: "No such email"});
    } //end of else form if(user)
  }) //end of the findOne.then
} //end of module.exports
