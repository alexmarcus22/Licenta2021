exports.home = (rq, res) => {
    res.render("home.hbs", {
        title: "Home"
    });
};