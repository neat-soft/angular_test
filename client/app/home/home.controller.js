'use strict';

angular.module('TestApp')
  .controller('HomeCtrl', function ($scope,toastr, $http,$location,articleService,categoryHelper) {
    $scope.currentCategoryNo = 0;
    $scope.currentCategoryID ;
    $scope.articles = undefined;
    $scope.categories = undefined;
    
    $scope.currentCategoryNo = categoryHelper.getCurrentCategoryIndex();
    console.log($scope.currentCategory);

    $scope.$watch(function(){return categoryHelper.getCurrentCategoryIndex()},function (newVal,oldVal){
        if (typeof newVal !=='undefined'){
            $scope.currentCategoryNo = categoryHelper.getCurrentCategoryIndex();
            if ($scope.articles != undefined)
            {
                $scope.currentCategoryID = $scope.categories[$scope.currentCategoryNo]['Category'].Id; 
            }
        }
    });

    articleService.getResponse()
        .success(function(res){
            $scope.articles =res.Data[0]["List of articles"]; 
            $scope.categories = res.Data[0]["List of categories"]
            $scope.currentCategoryID = $scope.categories[$scope.currentCategoryNo]['Category'].Id; 
            
        }).error(function(err){
            toastr.error("Error");
        }); 
    $scope.article_click = function(articleIndex)
    {
        categoryHelper.setCurrentArticleIndex(articleIndex);
        $location.path('/article');
    }

});