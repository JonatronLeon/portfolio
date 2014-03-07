'use_strict';

var express = require('express'),
    app = module.exports.app = express(),
    port = process.env.PORT || 3000,
    API_PATH = '/api/v1/'; // base url to use when calling the server

app.configure(function () {
    'use strict';
	app.use(express.favicon());
    app.use(express.bodyParser());
	app.use(app.router);
	app.use(express.static(__dirname)); // routes the user to the home page
	app.use(express.errorHandler({dumpExceptions: true, showStack: true, showMessage: true}));
});

app.listen(port, function () {
    'use strict';
    console.log("Listening on " + port);
});
