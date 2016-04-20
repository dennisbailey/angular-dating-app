(function(){
  'use strict';

  angular
  .module('temperamentsApp')
  .directive('landing', landing);

function landing() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/landing/landing.html',
    controller: 'LandingCtrl',
    controllerAs: 'vm',
    bindToController: true  
  };
}
})();
