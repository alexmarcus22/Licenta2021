const GoogleStrategy = require("passport-google-oauth20").Strategy
const mongoose = require('mongoose');
const GoogleUser = require('../Models/User/GoogleUser')

module.exports = function (passport) {
	passport.use(new GoogleStrategy({
		clientID: process.env.GOOGLE_ID,
		clientSecret: process.env.GOOGLE_SECRET,
		callbackURL: '/auth/google/callback'
	},
		async (token, refreshToken, profile, done) => {
			console.log(profile);
		}))


	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		User.findById(id,(err, user) => {
			done(err, user);
		});
	});
}
