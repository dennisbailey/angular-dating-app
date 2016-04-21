angular
  .module('temperamentsApp')
  .controller('LandingCtrl', LandingCtrl);

LandingCtrl.$inject = ['$timeout'];

function LandingCtrl($timeout) {
  var vm = this;

  vm.testimonials = [
    'Simply the best',
    'Just Do IT!',
    'Think Different',
    "I\'m Lovin' it",
    'Because You\'re Worth It',
    'Got Milk?',
    'Melts in Your Mouth, Not in Your Hands',
    'Tastes So Good, Cats Ask for It by Name',
    'Ding! You are now free to move about the country'
  ];

  vm.users = [
    'Leslie Odom',
    'Christopher Jackson',
    'Rory O\'Malley',
    'Phillipa Soo',
    'Renee Elise Goldsberry',
    'Daveed Diggs',
    'Anthony Ramos',
    'Howell Binkley',
    'Jasmine Cephas Jones'
  ];

  vm.count = 0;
  vm.user = vm.users[vm.count];
  vm.testimonial = vm.testimonials[vm.count];

  vm.changeitup = function () {
    $timeout(function () {

      if (vm.count < 8) { vm.count++; }

      else { vm.count = 0; }

      vm.user = vm.users[vm.count];
      vm.testimonial = vm.testimonials[vm.count];

      vm.changeitup();

    }, 1000);
  };

  vm.changeitup();

}
