/**

1. login
2. logout
3. register
4. set user info into localstorage
5. get user info from localstorage

**/
angular
  .module('temperamentsApp')
  .service('authService', authService);

authService.$inject = ['$http', '$window', '$rootScope'];

function authService($http, $window, $rootScope) {
  
  var user = {};
  
  return {
  
    login: function(user) {
      return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/auth/login', user);
    },
  
    logout: function(user) {
      user = null;
      $window.localStorage.clear();
      $rootScope.loggedIn = false;
    },
  
    register: function(user) {
      return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/auth/register', user);
    },
  
    setUserInfo: function(userData) {
      $window.localStorage.setItem('user', JSON.stringify(userData.data.data.user));
      $window.localStorage.setItem('token', JSON.stringify(userData.data.data.token));
    },
    
    setRegisterUserInfo: function(userData) {
      $window.localStorage.setItem('user', JSON.stringify(userData.data.data.data.email));
      $window.localStorage.setItem('token', JSON.stringify(userData.data.data.token));
    },
  
    getUserInfo: function(userData) {
      return $window.localStorage.getItem('user');
    },
    
  };
};