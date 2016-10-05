"use strict";

const { Router } = require("express");

const router = Router();

router.use(require("./login.js"));
router.use(require("./logout.js"));
router.use(require("./register.js"));

router.get("/", (req, res) => {
  res.render("index", {msg: "msg here", email: req.session.email });
});
//middleware

module.exports = router;
