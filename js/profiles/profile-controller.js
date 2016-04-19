angular.module('chatApp')
.controller('ProfileCtrl', ProfileCtrl);

ProfileCtrl.$inject = ['$scope'];

function ProfileCtrl($scope) { 
  console.log('Hello, ProfileCtrl!');  
}
