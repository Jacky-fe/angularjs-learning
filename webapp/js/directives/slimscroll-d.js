//滚动条指令，自动增加滚动条，并可以监控某个scope的内容
//example:<div class="messageContainer" slimscroll scroll-content="chatContent">  
define(["app/chatapp", 'plugins/slimscroll'], function(chatApp){
    'use strict';
    chatApp.registerDirective('slimscroll', slimScroll);
    slimScroll.$inject = [];
    function slimScroll() {
        return {
            link : function(scope, element, attrs){
                $(element).slimScroll({width : '375px', height : '400px'});
                scope.$watch(attrs["scrollContent"], function(oldV, newV) {
                    $(element).slimScroll({ scrollBy: '999px' });
                }, true);
            }
            
        };
    }
});