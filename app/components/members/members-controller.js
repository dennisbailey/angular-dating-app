angular
  .module('temperamentsApp')
  .controller('MembersCtrl', MembersCtrl);

MembersCtrl.$inject = ['memberSvcs'];

function MembersCtrl(memberSvcs) {
  var vm = this;
  
  vm.showOne = true;
  
  vm.findNearby = function() {
    lat = 39.707401;
    lon = -104.968597;
    
    vm.maxLat = lat + .145;
    vm.minLat = lat - .145;
    vm.maxLon = lon + .145;
    vm.minLon = lon - .145; 
  };
  
  vm.filterNearby = function(location) {
    return (val.age > MIN_AGE && val.age < MAX_AGE);
  };
  
  vm.getOne = function(id) {
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
