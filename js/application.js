define(['marionette'],
	function(Marionette) {

		var MyApplication = Marionette.Application.extend({
			initialize: function() {
				$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
					options.crossDomain = {
						crossDomain: true
					};
					options.xhrFields = {
						withCredentials: false
					};
				});
			}
		});

		return new MyApplication();
	});