exports.home = (rq, res) => {
    res.render("home.handlebars", {
        title: "Home"
    });
};