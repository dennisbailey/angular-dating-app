angular
  .module('temperamentsApp')
  .controller('MembersCtrl', MembersCtrl);

MembersCtrl.$inject = ['memberSvcs'];

function MembersCtrl(memberSvcs) {
  var vm = this;
  
  vm.showOne = true;
  
  vm.nearby = []
  
  vm.findNearby = function() {
    console.log('nearby');
    lat = 39.707401;
    lng = -104.968597;
    
    var maxLat = lat + .145 * 10;
    var minLat = lat - .145 * 10;
    var maxLng = lng + .145 * 10;
    var minLng = lng - .145 * 10; 
    
    vm.members.forEach (function(el) {
      if (el.address.geo.lat > minLat &&
          el.address.geo.lat < maxLat &&
          el.address.geo.lng > minLng &&
          el.address.geo.lng < maxLng )
          { vm.nearby.push(el) }
    })
    
    vm.members = vm.nearby;
    
  };
  
  vm.getOne = function(id) {
    console.log(id);
    memberSvcs.getOne(id)
    .then( function (result) { vm.oneProfile = result.data.data; })
    .catch( function (error) { return error; });
    
    vm.showOne = false;
  };

  vm.getAll = function() {
    memberSvcs.getAll()
    .then( function (result) { vm.members = result.data.data; })
    .catch( function (error) { return error; });
  };

  vm.getAll();

}
