"use strict";

const { Router } = require("express");

const router = Router();

router.use(require("./login.js"));
router.use(require("./logout.js"));
router.use(require("./register.js"));

//middleware

module.exports = router;
