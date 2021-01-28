const app = require("express")();
const glob = require("glob");
const path = require("path");
const exphbs = require("express-handlebars");

function getDirectories(src, callback) {
  glob(src + "/**/*.*", callback);
}

getDirectories("./App/router/controllers/", function (err, rs) {
  if (err) {
    console.log("Eror");
  } else {
    rs.forEach((file) => {
      var relativePath = file.substr(
        file.indexOf("/controllers/"),
        file.length
      );
      app.use("/", require("." + relativePath));
    });
  }
});

app.set("views", path.join(__dirname, "../views"));

app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "../views/layouts/"),
    partialsDir: path.join(__dirname, "../views/partials/"),
  })
);

app.set("view engine, 'hbs");

module.exports = app;
