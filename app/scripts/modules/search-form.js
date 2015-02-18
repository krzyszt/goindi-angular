'use strict'

angular.module('goIndi.searchForm',[])
   .directive('searchForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'views/search-form.tpl.html'
    };
});


