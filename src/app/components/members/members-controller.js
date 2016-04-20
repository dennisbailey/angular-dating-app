angular
  .module('temperamentsApp')
  .controller('MembersCtrl', MembersCtrl);

MembersCtrl.$inject = ['memberSvcs'];

function MembersCtrl(memberSvcs) {
  var vm = this;
  
  vm.showOne = true;
  
  vm.getOne = function(id) {
    console.log('id', id);
    memberSvcs.getOne(id)
    .then( function (result) { vm.oneProfile = result.data.data; })
    .catch( function (error) { return error; });
    
    vm.showOne = false;
  };

  vm.getAll = function() {
    memberSvcs.getAll()
    .then( function (result) { vm.members = result.data.data; })
    .catch( function (error) { return error; });
  };

  vm.getAll();

}
