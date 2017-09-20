define(["app/chatapp"], function(chatApp){
    'use strict';
	chatApp.registerFilter('getMessageClassName', getMessageClassName);
	getMessageClassName.$inject = [];
	function getMessageClassName() {
        return function(input){
			return input == "_self" ? "message_self" : "message_other";
		}
    }
});
