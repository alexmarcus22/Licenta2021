const express = require("express");
var router = express.Router();

router.get("/account/login", (rq, rs, next) => {
  rs.render("account/login.hbs");
});

router.post("/account/login", (rq, rs, next) => {
  rs.send("account/login.hbs");
});

module.exports = router;
