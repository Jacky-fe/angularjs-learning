define(["app/chatapp"], function(chatApp){
	'use strict';
	//注册控件
	chatApp.registerController('chatListCtrl', chatListCtrl);
	//注入依赖
	chatListCtrl.$inject = ['$scope', 'chatService', '$routeParams', '$timeout'];
	//具体逻辑
	function chatListCtrl($scope, chatService, $routeParams, $timeout) {
        $scope.chatContent = chatService.getAllChatContent();
        chatService.setCurrentChat($routeParams.chatName);
        $scope.chatName = $routeParams.chatName;
        var addMessage = function(e, msg){
        	$timeout(function(){
        		//if (msg.chatName === $scope.chatName) { 
					$scope.chatContent.push(msg);
				//}
			});
        }
		$scope.$on("chat:message:received", function(e, msg){
			addMessage(e, msg);
		});
		$scope.sendMessage = function(){
			if( $scope.message!=='' ) {
				var info = {
						chatName : $scope.chatName, //有可能是1对1，有可能是群聊id，或讨论组id
						from : "_self", //有自己，他人 
						type : 'text', //有text, image, link, video, expression（大表情）。text里还要注意处理自带表情和emoji表情
						content : $scope.message, //text这样，其他的json格式待定
						avatar : "images/avatar.jpg"
					}
				$scope.message = "";	
				chatService.processMessage(info);
			}
		}
    }

});