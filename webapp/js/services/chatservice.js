define(["app/chatapp"], function(chatApp){
	'use strict';
	var service;
    chatApp.registerService('chatService', chatService);
    chatService.$inject = ['$rootScope', '$filter'];
   	function chatService($rootScope, $filter){
		service = {
			_currentChat : "",
			chatContent : [
				{
					chatName : "思想加闲聊群", //有可能是1对1，有可能是群聊id，或讨论组id
					from : "_self", //有自己，他人 
					type : 'text', //有text, image, link, video, expression（大表情）。text里还要注意处理自带表情和emoji表情
					content : '我要吃龙虾', //text这样，其他的json格式待定
					avatar : "images/avatar.jpg",
					showTime : "前天上午 9:15"
				}, {
					from : "夜小Q",
					chatName : "思想加闲聊群",
					type : 'text',
					content : '+1',
					avatar : "images/avatar.jpg"
				}, {
					chatName : "思想加闲聊群",
					from : "志刚",
					type : 'text',
					content : '<b>如果有人做我就买</b>',
					avatar : "images/avatar.jpg",
					showTime : "昨天下午 10:00"
				}, {
					chatName : "思想加闲聊群",
					from : "苏洋",
					type : 'text',
					content : '我只管吃龙虾虾虾虾虾',
					avatar : "images/avatar.jpg"
				}, {
					chatName : "思想加闲聊群",
					from : "水吻涟漪",
					type : 'text',
					content : '我只会吃龙虾虾虾虾虾',
					avatar : "images/avatar.jpg",
					showTime : "上午 10:15"
				}],
			getAllChatContent : function() {
				return [].concat(this.chatContent);
			}, 
			getChatContent : function (chatName){
				return $filter("filter")(this.chatContent, {chatName:chatName}, true);
			},
			processMessage : function(message, eventName){
				this.chatContent.push(message);
				eventName = eventName ? eventName : "chat:message:received";
				$rootScope.$broadcast(eventName, message);
			},
			setCurrentChat : function(chatName) {
				this._currentChat = chatName;
			},
			getCurrentChat : function() {
				return this._currentChat;
			}
	    }
	    services.chatService = service;
		return service;
	}

});