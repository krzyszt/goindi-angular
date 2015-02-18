'use strict';

angular
  .module('goIndi', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'goIndi.sidebarTree',
    'goIndi.searchForm'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
