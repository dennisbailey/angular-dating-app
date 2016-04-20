angular
  .module('temperamentsApp')
  .config(config);
    
  config.$inject= ['$routeProvider'];
  
function config($routeProvider) { 
  $routeProvider
  
  .when('/', {
    template: '<landing></landing>'
  })
  
  .when('/members', {
    template: '<members-all></members-all>'
  })
    
//     .when('/profile', {
//       template: '<profile></profile>'
//     })
//     
//     .otherwise({
//       redirectTo: '/'
//     });
    
}