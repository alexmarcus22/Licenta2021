// 
// @Alexandru Marcus
// 

var express = require("express");
var port = process.env.PORT || 3002;
var exphbs = require('express-handlebars');
var path = require('path');
var Routing = require('./App/router/index');
var reload = require('reload');


var app = express();
let routeInfo = new Routing.JsonRoute(app, {
    routesPath: "./App/router",
    controllersPath: "./App/router/controllers",
    defaultAction: "index",
    cors: true,
    displayRoute: false,
    "processdir": __dirname
}).start();
app.set('views', path.join(__dirname + '/App/views'));

app.engine('handlebars', exphbs());
app.set("view engine, 'handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var router = express.Router();
router.get('/express/', function (req, res) {
    res.send(' this is a standard routing ');
});
app.use('/', router);

app.listen(port, () => {
    console.log('App started...');
})

reload(app);