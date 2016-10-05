"use strict";

const { Router } = require("express");

const session = require("../controllers/register.js")

const router = Router();

router.get("/register", (req, res) => {
  res.render("register");
});
router.post("/register", session.create);

module.exports = router;
