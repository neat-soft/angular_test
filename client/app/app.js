'use strict';

var myApp = angular.module('TestApp', [
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngAnimate',
  'ui.router',
  'ui.bootstrap',
  'angular-loading-bar',
  'infinite-scroll',
  'updateMeta',
  'toastr'
])
  .config(function ($urlRouterProvider, $stateProvider,$routeProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/home');  
    $locationProvider.html5Mode(true);
    //$httpProvider.useApplyAsync(true);
  });