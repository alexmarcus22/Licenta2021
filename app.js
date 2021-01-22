// 
// @Alexandru Marcus
// Server
// 

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const exphbs = require('express-handlebars');
const Routing = require('./App/router/index');
const session = require('express-session');

app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
}))

let routeInfo = new Routing.JsonRoute(app, {
	routesPath: "./App/router/routes",
	controllersPath: "./App/router/controllers",
	policyPath: "./App/router/policy",
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
app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
	console.log('App started on port ', port);
})
