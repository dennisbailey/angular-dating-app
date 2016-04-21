(function(){
  'use strict';

  angular
  .module('temperamentsApp')
  .directive('footerz', footerz);

  function footerz() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/footerz/footerz.html'  
    };
  }
})();
