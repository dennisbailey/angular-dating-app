(function(){
  'use strict';

  angular
  .module('temperamentsApp')
  .directive('navBar', navBar);

function navBar() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/nav-bar/nav-bar.html'
  };
}
})();
