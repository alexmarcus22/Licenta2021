const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get("/auth/google", passport.authenticate('google', {
	scope: ['profile']
}))

router.get("/auth/google/callback", passport.authenticate('google', {
	failureRedirect: "/"
}), (rq, rs) => {
	rs.redirect("/account/dashoboard")
})

module.exports = router;