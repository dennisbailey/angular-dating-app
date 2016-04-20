(function(){
  'use strict';

  angular
  .module('temperamentsApp')
  .directive('footer', footer);

  function footer() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html'  
    };
  }
})();
