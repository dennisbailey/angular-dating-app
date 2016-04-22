(function(){
  'use strict';

  angular
  .module('temperamentsApp')
  .directive('profile', profile);

function profile() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/profile/profile.html',
    controller: 'ProfileCtrl',
    controllerAs: 'vm',
    bindToController: true
  };
}
})();
