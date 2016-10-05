"use strict";

const { Router } = require("express");

const session = require("../controllers/login.js")

const router = Router();

//middleware
router.get("/login", (req, res) => {
  res.render("login");
});
router.post("/login", session.create);

module.exports = router;
