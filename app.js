var express = require("express");
var port = process.env.PORT || 3002;

var app = express();

app.get('/', (rq, rs) => {
    rs.send(JSON.stringify({
        Hello: 'World'
    }));
});

app.listen(port, () => {
    console.log('App started...');
})