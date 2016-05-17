/*(function () {
  'use strict';
  angular.module('TestApp')
    .service('articleService',articleService);

  articleService.$inject = ['$http'];
  function articleService($http) {
    return {
      getResponse: getResponse
    };
  function getResponse() {
      return $http.get('response.json');
  }
 }

})();*/

'use strict';
angular.module('TestApp')
.factory('articleService', function($http){

    function getResponse() {
        return $http.get('./app/service/response.json');
    }
    return {
        getResponse: getResponse
    }
});