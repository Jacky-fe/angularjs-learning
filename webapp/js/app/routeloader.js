define(["lib"], function(){
	'use strict';
	return function (templateUrl, controllerName, dependencies) {
        var ret = {};
		ret.templateUrl =templateUrl
		ret.controller = controllerName;
		ret.resolve = {
			delay : function ($q, $rootScope) {
				var defered = $q.defer();
	            require(dependencies, function() {
	                $rootScope.$apply(function() {
	                    defered.resolve();
	                });
	            });
	            return defered.promise;
            }
        }
        return ret;
	}
});