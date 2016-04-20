(function(){
  'use strict';

  angular
  .module('temperamentsApp')
  .directive('profileShort', profileShort);

function profileShort() {
  return {
    require: '^^MembersAll',
    restrict: 'E',
    templateUrl: 'app/components/profile-short/profile-short.html'
  };
}
})();
