exports.register = (rq, rs) => {
	return rs.render("account/register.hbs", {
		title: "Register"
	})
};
