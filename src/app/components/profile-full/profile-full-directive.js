(function(){
  'use strict';

  angular
  .module('temperamentsApp')
  .directive('profileFull', profileFull);

function profileFull() {
  return {
    require: '^^MembersAll',
    restrict: 'E',
    templateUrl: 'app/components/profile-full/profile-full.html'
  };
}
})();
