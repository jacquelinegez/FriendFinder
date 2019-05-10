var express = require("Express");
var bodyParser = require('body-parser');
var path = require('path');

var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require('./app/routing/api-routes.js.js')(app); 
require('./app/routing/html-routes.js.js')(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});