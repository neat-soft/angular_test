'use strict';

angular.module('TestApp')
  .controller('NavbarCtrl', function ($scope, $window, $location,articleService,categoryHelper) {
    $scope.isCollapsed = true;
   
    $scope.selectedCategory =0 ;
    $scope.categories;
    $scope.isActive = function(selected) {
      return  $scope.selectedCategory === selected;
    };

    articleService.getResponse()
    	.success(function(res){
    		$scope.categories =res.Data[0]["List of categories"]; 
    	}).error(function(err){
    		toastr.error("Error");
    	});	
    $scope.selectCategory = function (selectedCategoryIndex) {

    	$scope.selectedCategory = selectedCategoryIndex;
        categoryHelper.setCurrentCategoryIndex(selectedCategoryIndex);
    }
  });
