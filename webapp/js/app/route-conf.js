define([], function () {
    'use strict';
    return {
        defaultRoute: '/chatlist/all',
        routes: {
        	//聊天信息列表
            '/chatlist/:chatName': {
                templateUrl: 'templates/chatlist.html',
                controller: 'chatListCtrl',
                dependencies: ['filters/getmessageclassname','services/chatservice','directives/slimscroll-d', 'ctrls/chatlistctrl']
            }
        }
    };
});