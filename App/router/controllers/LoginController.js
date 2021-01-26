var {body, validation} = require("express-validator");

exports.get = (rq, rs) => {
  rs.render("account/login.hbs", {
    title: "Login",
  });
};

exports.post = (rq, rs) => {
  var errors = body("emailAccount").isEmail();
  console.log(errors);
};
