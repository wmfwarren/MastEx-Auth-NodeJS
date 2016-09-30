"use strict";

//third party modules
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const RedisStore = require("connect-redis")(session);
//my modules
const { connect } = require("./database/database.js");

//express app set up
const app = express();
const port = process.env.PORT || 3000;
app.set("port", port);
//middleware
app.use(bodyParser());
app.use(session({
  store: new RedisStore({
    url: process.env.REDIS_URL || "redis://localhost:6379",
  }),
    secret: "marshall",
    resave: false,
    saveUninitialized: false
}));

app.use(require("./routes"));


connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on ${port}`);
    })
  })
  .catch(console.error);
