// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
	'bootstrap',
    'views/home'/*,
    'views/about',
	'views/resume',
	'views/contact'*/
], function($, _, Backbone, Bootstrap, HomeView/*, AboutView, ResumeView, ContactView*/) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			// Define some URL routes
			/*
			'/about': 'showAbout',
			'/resume': 'showResume',
			'/contact': 'showContact',
			*/
			
			// Default
			'*actions': 'defaultAction'
		}
	});
	var initialize = function(){
		var app_router = new AppRouter;
		/*
		app_router.on('route:showHome', function(){
			// Call render on the module we loaded in via the dependency array
			// 'views/home'
			var homeView = new HomeView();
			homeView.render();
		});
		*/
		app_router.on('route:defaultAction', function(actions){
			// We have no matching route, lets display the home page
			var homeView = new HomeView();
			homeView.render();
		});
		
		Backbone.history.start();
	};
	return {
		initialize: initialize
	};
});
