'use strict';
requirejs.config({
	baseUrl : 'js/lib',
	paths : {
		app : '../app',
		ctrls : '../ctrls', 
		services : '../services',
        filters : '../filters',
		directives : '../directives',
        plugins : '../plugins'
	}, 
	shim: {
        'plugins/slimscroll': { deps: ['jquery'] },
        'angular': { exports: 'angular' },
        'jquery': { exports: ['jQuery', '$'] },
        'angular-animate': { deps: ['angular'] },
        'angular-route': { deps: ['angular'] },
        'angular-sanitize': { deps: ['angular'] },
        'angular-resource': { deps: ['angular'] },
        'angular-bootstrap': { deps: [ 'angular' ] }
    }
});

window.services = {};

require(['app/chatapp'],
    function(app) {
        angular.bootstrap(document, ['chatApp']);
    }
);

