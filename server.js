// public modules
var express = require('express');

var app = express();
var router = express.Router();	// router for the api's

var port = process.env.PORT || 8000;


app.use('', router); // Adding Express router

app.use(express.static(__dirname + "/app"));	// Serve static file if no matching routes

app.listen(port);
console.log('Node server running on port ' + port);



/* ReST API ROUTES
   Add any rest api routes here, for example:
 	
 	router.get('/api/profiles/:id', function(req, res) {
	
 	});
 */

// If unknown url, return 404
app.use(function (req, res) {
  res.status(404).end();
});


