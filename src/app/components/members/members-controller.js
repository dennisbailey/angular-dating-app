angular
  .module('temperamentsApp')
  .controller('MembersCtrl', MembersCtrl);

MembersCtrl.$inject = ['$rootScope', 'memberSvcs', 'authService'];

function MembersCtrl($rootScope, memberSvcs, authService) {
  var vm = this;

  vm.showOne = false;
  vm.loading = true;

  // Popular users are users with more than 1 match
  vm.findPopular = function() {
    vm.loading = true;

    var popular = [];

    vm.all.forEach (function(el) {
      if (el._matches.length > 4) { popular.push(el); }
    });

    vm.members = popular;

    vm.loading = false;

  };

  // Nearby users are within ~200 miles of the user
  vm.findNearby = function() {
    
    vm.loading = true;

    var nearby = [];

    lat = JSON.parse(authService.getUserInfo()).address.geo.lat;
    lng = JSON.parse(authService.getUserInfo()).address.geo.lng;

    var maxLat = lat + 0.145 * 10;
    var minLat = lat - 0.145 * 10;
    var maxLng = lng + 0.145 * 10;
    var minLng = lng - 0.145 * 10;

    vm.all.forEach (function(el) {
      if (el.address.geo.lat > minLat &&
          el.address.geo.lat < maxLat &&
          el.address.geo.lng > minLng &&
          el.address.geo.lng < maxLng ) { nearby.push(el); }
    });

    vm.members = nearby;

    vm.loading = false;
  };

  // Matches are users that have matched with the user's ID
  vm.findMatches = function() {

    vm.loading = true;
    
    var userID = JSON.parse(authService.getUserInfo())._id;
    
    var matches = [];

    vm.all.forEach (function(el) {
      el._matches.forEach(function(element) {
        if (element === userID ) {matches.push(el);}
      });
    });

    vm.members = matches;

    vm.loading = false;

  };

  vm.getOne = function(id) {
    vm.loading = true;

    memberSvcs.getOne(id)
    .then( function (result) { vm.oneProfile = result.data.data;
                               vm.loading = false;
                               vm.showOne = true; })
    .catch( function (error) { return error; });

  };

  vm.getAll = function() {
    vm.loading = true;
    memberSvcs.getAll()
    .then( function (result) { vm.members = result.data.data;
                               vm.all = result.data.data;
                               vm.loading = false; })
    .catch( function (error) { return error; });

  };

  vm.getAll();

}
