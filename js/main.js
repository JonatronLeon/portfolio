// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
        underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min',
        backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
		bootstrap: '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',
		templates: '../templates'
    }
});

require([
    // Load our app module and pass it to our definition function
    'app',
], function(App){
    // The "app" dependency is passed in as "App"
    App.initialize();
});