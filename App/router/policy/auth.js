exports.check = function (rq, rs, next) {
	// if (!rq.session.user) {
	// 	return rs.redirect("http://" + rq.hostname+ ":3001");
	// }
	next();
}