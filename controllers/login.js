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
      bcrpyt.compare(inputPassword, user.password, (err, matches) => {
        console.log("COMPARE DONE GONE FIRED");
        if(matches) {
          req.session.email = inputEmail;
          res.send({msg: "Good'ay Mate"});
        } else {
          res.send({msg: "You messed it up"});
        }

      })
      .catch(err);
    } else {
      res.send({msg: "No such email"});
    }
  })
}
