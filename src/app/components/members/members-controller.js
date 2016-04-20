angular
  .module('temperamentsApp')
  .controller('MembersCtrl', MembersCtrl);

MembersCtrl.$inject = ['memberSvcs'];

function MembersCtrl(memberSvcs) {
  var vm = this;

  vm.getAll = function() {
    memberSvcs.getAll()
    .then( function (result) { vm.members = result.data.data; })
    .catch( function (error) { return error; });
  };

  vm.getAll();

}
