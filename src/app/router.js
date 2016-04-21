angular
  .module('temperamentsApp')
  .config(config);

  config.$inject= ['$routeProvider'];

function config($routeProvider) {
  $routeProvider

  .when('/', {
    template: '<landing></landing>'
  })
  
  .when('/login', {
    template: '<login></login>'
  })

  .when('/members', {
    template: '<members-all></members-all>'
  })
  
  .when('/register', {
    template: '<register></register>'
  })

//     .when('/profile', {
//       template: '<profile></profile>'
//     })
//
  .otherwise({
    redirectTo: '/'
  });

}
