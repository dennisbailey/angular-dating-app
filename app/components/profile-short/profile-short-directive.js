(function(){
  'use strict';

  angular
  .module('temperamentsApp')
  .directive('profileShort', profileShort);

function profileShort() {
  return {
    require: '^^MembersCtrl',
    restrict: 'E',
    templateUrl: 'app/components/profile-short/profile-short.html'
  };
}
})();
