angular
  .module('temperamentsApp')
  .run(run);

run.$inject = ['$rootScope', '$location', '$window', 'authService'];

function run($rootScope, $location, $window, authService) {

  $rootScope.$on('$routeChangeStart', function(event, next, current) {
    
    // if route us restricted and no token is present
    if(next.restricted && !$window.localStorage.getItem('token')) {
      $location.path('/login');
    }
    
    // if token and prevent logging in is true
    if(next.preventLoggedIn && $window.localStorage.getItem('token')) {
      $location.path('/');
    }
    
  });
};