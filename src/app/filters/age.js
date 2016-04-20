angular
  .module('temperamentsApp')
  .filter('age', age);

function age() {
  
  return function(input, current) {
    current = Date.now();
    
    // Difference in milliseconds
    var ageDiffMs =  current - new Date(input).getTime();
    var ageDate = new Date(ageDiffMs);

    return Math.abs( ageDate.getUTCFullYear() - 1970 );
  }

}