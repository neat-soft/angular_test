'use strict';

angular.module('TestApp')
  .factory('categoryHelper', function(){
   
    var selectedCategoryIndex=0;
    var selectedArticleIndex=0;
    var CATEGORY = {};
   
    CATEGORY.setCurrentCategoryIndex=function(categoryIndex){
      selectedCategoryIndex = categoryIndex;
    }
    CATEGORY.getCurrentCategoryIndex=function(){
      return selectedCategoryIndex;
    };

    CATEGORY.setCurrentArticleIndex=function(articleIndex){
      selectedArticleIndex = articleIndex;
    }
    CATEGORY.getCurrentArticleIndex=function(){
      return selectedArticleIndex;
    };

    return CATEGORY;
  });