"use strict";

const User = require("../models/user.js")

module.exports.destroy = (req, res) => {
  req.session.destroy();
  res.status(200).send({msg: "logged out, but why?"})
}
