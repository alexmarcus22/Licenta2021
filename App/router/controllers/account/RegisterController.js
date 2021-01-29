const express = require("express");
var router = express.Router();

router.get("/account/register", (rq, rs, next) => {
  return rs.render("account/register.hbs")
});

module.exports = router;


