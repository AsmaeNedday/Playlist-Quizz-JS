//includes the requird http modules
let http = require('http'); 
let url = require('url');
let fs = require('fs');

//create  the web server
let server = http.createServer(function (req, res) {
    let url_parts = url.parse(req.url, true);
    let name = url_parts.query.name;
    if (name) {
        console.log('Email: ' +name);
        res.writeHead(200, {'Content-Type': 'application/json'});
		//display the welcome message and the registered email
        res.end(JSON.stringify({message: 'Welcome ' +name }));
    } else {
        console.log('No email!');
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('form.html',function (err,data) {
            res.end(data);
        }		
);
    }
	
//server is listening on the 1337 port 	
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');