var express = require("express");
var app = express(); 
var bodyParser = require('body-parser');
//var path = require('path');

var PORT = process.env.PORT || 8080; 
//var jsonParser = bodyParser.json()
app.use(bodyParser.urlencoded({ extended:true }));

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json({ type:'application/**json' }))

app.use(bodyParser.raw ({ type:'application/vnd.custom-type' }))

app.use(bodyParser.text({ type: 'text/html' }));
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});