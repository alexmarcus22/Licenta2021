//
// @Alexandru Marcus
// Express
//

const express = module.exports = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const session = require("express-session");
const db = require("./App/db/index");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);



const routing = require("./App/router/index");
app.use(routing);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("App started on port ", port);
});
