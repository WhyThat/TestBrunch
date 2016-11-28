'use strict';
var flo=require('fb-flo'),
	fs = require('fs'),
	path = require('path');

var dir = path.resolve(__dirname, '/public');
var server = flo(dir, {glob : ['**/*.js', '**/*css']}, resolver);

server.once('ready', () => {
	console.log("FB-FLO server ready to rock!");
});

var resolver = (filepath, callback) => {
	var fullPath = path.resove(dir, filepath);
	callback({
		resourceURL: filepath,
		contents: fs.readFileSync(fullPath).toString(),
		update: (window, resourceUrl) => {
			console.log(resourceUrl + " has just been updated with new content!");
		}

	});
};
