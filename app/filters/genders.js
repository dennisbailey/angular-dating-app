angular.module('temperamentsApp')
  .filter('genders', function() {

    return function (gender) {
      if      (gender === 0) { return 'Sanguine'; }
      else if (gender === 1) { return 'Choleric'; }
      else if (gender === 2) { return 'Melancholic'; }
      else if (gender === 3) { return 'Phlegmatic'; }
    };

});
