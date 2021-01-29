//
// @Alexandru Marcus
// Express
//

var dotenv = require("dotenv").config({
  path: "./App/config/.env",
});
const express = module.exports = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const session = require("express-session");
const DB = require("./App/config/Database/connect");
const passport = require("passport");
DB.connect();

const sessionOpt = {
  key: "mysite.sid.uid.whatever",
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false
};

if (app.get("env") === "production") {
  session.cookie.secure = true;
}

const routing = require("./App/router/index");
app.use(routing);
require("./App/config/Passport/index")(passport);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize())
app.use(passport.session())
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(session(sessionOpt));

app.listen(port, () => {
  console.log("App started on port ", port);
});
