"use strict";

const { Router } = require("express");

const session = require("../controllers/register.js")

const router = Router();

router.post("/register", session.create);

module.exports = router;
