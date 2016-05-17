'use strict';

angular.module('TestApp')
  .config(function ($stateProvider) {
	$stateProvider  	
  	  .state('article', {
        url:'/article',
        templateUrl: 'app/article/article.html',
        controller: 'ArticleCtrl'
      })
  });