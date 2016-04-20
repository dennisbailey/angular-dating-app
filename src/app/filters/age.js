// *** Adapted from srph's angular-age-filter on github https://github.com/srph/angular-age-filter *** //
// *** srph drew inspiration from a Stack Overflow Answer by pixelbits http://stackoverflow.com/questions/24883308/convert-birthday-to-age-in-angularjs *** //
// *** angular-age-filter © 2014+, Kier Borromeo (srph). Released under the MIT License. *** //

angular
  .module('temperamentsApp')
  .filter('age', age);

function age() {

  return function(input, current) {

    // Difference in milliseconds
    var ageDiff =  Date.now() - new Date(input).getTime();
    var ageDate = new Date(ageDiff);

    return Math.abs( ageDate.getUTCFullYear() - 1970 );
  };

}
