'use strict'

angular.module('goIndi.sidebarTree',[])
   .directive('sidebarTree', function(){
       return {
           restrict: 'E',
           templateUrl: 'views/sidebar-tree.tpl.html'
       };
});


