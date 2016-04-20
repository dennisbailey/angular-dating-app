(function(){
  'use strict';
  
  angular
  .module('temperamentsApp')
  .directive('profileShort', profileShort);
  
function profileShort() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/profile-short/profile-short.html',
    controller: 'MembersCtrl',
    controllerAs: 'vm',
    bindToController: true
  }
}
})();