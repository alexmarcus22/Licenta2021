exports.check = function (rq, rs, next) {
	if (!rq.session.user) {
		return rs.render("account/login.handlebars", {
			title: "Login"
		})
	}
	next();
}