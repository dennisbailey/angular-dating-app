angular
  .module('temperamentsApp')
  .service('memberSvcs', memberSvcs);

memberSvcs.$inject = ['$http'];

function memberSvcs($http) {
  return {

   getAll : function () {

     return $http.get('https://galvanize-student-apis.herokuapp.com/gdating/members?limit=10');

   },
   
   getOne : function (id) {
     console.log('im in the service');
     return $http.get('https://galvanize-student-apis.herokuapp.com/gdating/members/'+ id +'');
   }

 };
}
