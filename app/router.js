angular
  .module('temperamentsApp')
  .config(config);

  config.$inject= ['$routeProvider'];

function config($routeProvider) {
  $routeProvider

  .when('/', {
    template: '<landing></landing>',
    restricted: false,
    preventLoggedIn: false
  })
  
  .when('/login', {
    template: '<login></login>',
    restricted: false,
    preventLoggedIn: true
  })
  
  .when('/logout', {
    restricted: false,
    preventLoggedIn: false,
    resolve: {
      goodbye: function(authService, $location) {
                  authService.logout();
                  $location.path('/'); 
               }
            }
  })

  .when('/members', {
    template: '<members-all></members-all>',
    restricted: true,
    preventLoggedIn: false
  })
  
  .when('/register', {
    template: '<register></register>',
    restricted: false,
    preventLoggedIn: true
  })

//     .when('/profile', {
//       template: '<profile></profile>'
//     })
//
  .otherwise({
    redirectTo: '/'
  });

}


