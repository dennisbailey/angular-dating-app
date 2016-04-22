angular
  .module('temperamentsApp')
  .controller('ProfileCtrl', ProfileCtrl);

ProfileCtrl.$inject = ['$routeParams', 'memberSvcs', 'authService'];

function ProfileCtrl($routeParams, memberSvcs, authService) {
  console.log('hello');
  var vm = this;
  
  var profileID = ( typeof $routeParams.id == undefined) ? $routeParams.id : JSON.parse(authService.getUserInfo())._id;

  vm.getInfo = function(id) {
    vm.loading = true;

    memberSvcs.getOne(id)
    .then( function (result) { vm.profile = result.data.data;
                               vm.loading = false;
                               vm.showOne = true; })
    .catch( function (error) { return error; });

  };

  vm.getInfo(profileID);

}
