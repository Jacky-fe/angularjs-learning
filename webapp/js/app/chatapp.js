define(["app/routeloader", "app/route-conf", "lib"], function(routeLoader, routeConf){
		'use strict';
		var chatApp = angular.module('chatApp', ['ngRoute', 'ngSanitize']);
		chatApp.config(function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $provide, $filterProvider) {
			//比较hack的做法，为了按需加载
			chatApp.registerController = $controllerProvider.register;
	        chatApp.registerDirective = $compileProvider.directive;
	        chatApp.registerFilter = $filterProvider.register;
	        chatApp.registerFactory = $provide.factory;
	        chatApp.registerService = $provide.service;
	        //加载route配置
	        if (routeConf.routes != undefined) {
	            angular.forEach(routeConf.routes, function(route, path) {
	                $routeProvider.when(path, routeLoader(
	                    route.templateUrl,
	                    route.controller,
	                    route.dependencies));
	            });
	        }
	        if (routeConf.defaultRoute != undefined) {
	            $routeProvider.otherwise({ redirectTo: routeConf.defaultRoute });
	        }
			
         });
		return chatApp;
});

	

