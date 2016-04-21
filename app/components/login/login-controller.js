angular
  .module('temperamentsApp')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$rootScope', '$location', 'authService'];

function LoginCtrl($rootScope, $location, authService) {
  var vm = this;

  vm.user = {};
  
  vm.login = function() {
    console.log('user', vm.user);
    authService.login(vm.user)
   .then(function(user) { authService.setUserInfo(user);
                          $location.path('/members');
                          $rootScope.currentUser = authService.getUserInfo(); })
    .catch( function (error) { console.log(error); return error; })
  
  };

}
