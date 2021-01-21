exports.register = (rq, rs) => {
	return rs.render("account/register.handlebars", {
		title: "Register"
	})
};
