(function(){
  'use strict';

  angular
  .module('temperamentsApp')
  .directive('membersAll', membersAll);

  function membersAll() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/members/members.html',
      controller: 'MembersCtrl',
      controllerAs: 'vm',
      bindToController: true
    };
  }
})();
