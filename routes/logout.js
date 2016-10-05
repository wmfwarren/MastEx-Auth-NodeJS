"use strict";

const { Router } = require("express");

const session = require("../controllers/logout.js")

const router = Router();

router.get("/logout", (req, res) => {
  res.render("logout");
});
router.post("/logout", session.destroy);

module.exports = router;
