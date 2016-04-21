angular
  .module('temperamentsApp')
  .service('authInterceptor', authInterceptor);

authInterceptor.$inject = ['$http', '$window'];

function authInterceptor($http, $window) {
  
  return {
    
    request: function(config) {
      // check for token in headers
      var token = $window.localStorage.getItem('token');
      
      return config;

    }
  };
};