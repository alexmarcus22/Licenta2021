const express = require("express");
var router = express.Router();

router.get("/account/register", (rq, rs, next) => {
  return rs.render("account/register.hbs", {
    title: "MathPlace - Register"
  })
});

router.post("/account/register", (rq, rs, next) => {
  return rs.render("account/register.hbs", {
    alert: "success",
    message: "DA!"
  })
})

module.exports = router;


