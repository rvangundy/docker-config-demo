/******************
 *  Dependencies  *
 ******************/

var http = require('http');

/***************
 *  Variables  *
 ***************/

var firstName   = process.env.FIRST_NAME;
var lastName    = process.env.LAST_NAME;
var gravatarUrl = process.env.GRAVATAR_URL;
var port        = process.env.PORT;
var greeting    = process.env.PAGE_GREETING;

/*************
 *  Content  *
 *************/

var content = `<html><head><title>Demo 3</title></head><body>
	<h1>${greeting}</h1>
	<h3><i>${firstName} ${lastName}</i></h3>
	<img src="${gravatarUrl}">
</body></html>`;

/************
 *  Server  *
 ************/

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(content);
}).listen(port);

console.log('Server running on port ' + port);