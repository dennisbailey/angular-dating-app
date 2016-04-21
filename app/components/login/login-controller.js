angular
  .module('temperamentsApp')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$rootScope', '$location', 'authService'];

function LoginCtrl($rootScope, $location, authService) {
  var vm = this;

  vm.user = {};
  
  vm.login = function() {
    
    authService.login(vm.user)
   .then(function(user) { authService.setUserInfo(user);
                          $location.path('/members');
                          $rootScope.currentUser = JSON.parse(authService.getUserInfo()); 
                         })
    .catch( function (error) { console.log(error); return error; })
  
  };

}
