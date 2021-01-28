var express = require("express");
var router = express.Router();

router.get("/", (rq, rs) => {
  rs.render("home.hbs");
});

module.exports = router;
