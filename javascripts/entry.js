requirejs.config({
	baseURL: "./javascripts",
	paths:{
		jquery: "../lib/bower_components/jquery/dist/jquery.min",
		bootstrap:"../lib/bower_components/bootstrap/dist/js/bootstrap.min",
		hbs:"../lib/bower_components/require-handlebars-plugin/hbs"
	},
	// I need this to make sure jquery loads before bootstrap, 
	// because bootstrap needs it in order to work.
	shim: {
		"bootstrap": ["jquery"]
	}
});

require(
	["bootstrap", "songs"],
	function(b, songs) {
});










