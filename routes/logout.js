"use strict";

const { Router } = require("express");

const session = require("../controllers/logout.js")

const router = Router();

router.post("/logout", session.destroy);

module.exports = router;
