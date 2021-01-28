const express = require("express");
var router = express.Router();

router.get("/account/dashboard", (rq, rs, next) => {
  rs.render("account/dashboard/home.hbs")
});

module.exports = router;