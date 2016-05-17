'use strict';

angular.module('TestApp')
  .controller('ArticleCtrl', function ($scope,toastr, $http,$location,articleService,categoryHelper) {
    $scope.currentArticleNo = 0;
    $scope.currentArticle;
    $scope.articles = undefined;
    $scope.categories = undefined;
    
    $scope.currentArticleNo = categoryHelper.getCurrentArticleIndex();

    $scope.$watch(function(){return categoryHelper.getCurrentArticleIndex()},function (newVal,oldVal){
        if (typeof newVal !=='undefined'){
            $scope.currentArticleNo = categoryHelper.getCurrentArticleIndex();
            if ($scope.articles != undefined)
            {
                $scope.currentArticle = $scope.articles[$scope.currentArticleNo]['Article']; 
            }
        }
    });

    articleService.getResponse()
        .success(function(res){
            $scope.articles =res.Data[0]["List of articles"]; 
            $scope.currentArticle = $scope.articles[$scope.currentArticleNo]['Article']; 
            
        }).error(function(err){
            toastr.error("Error");
        }); 

});