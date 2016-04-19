angular
  .module('temperamentsApp')
  .service('memberSvcs', memberSvcs);
  
memberSvcs.$inject = ['$http']
  
function memberSvcs($http) {
  return {
   
   getAll : function () {
          
     return $http({
        url: 'https://galvanize-student-apis.herokuapp.com/gdating/members?limit=10',
        method: 'GET'
      })
     
     .then( function (result) { return result })
     
     .catch( function (error) { return error; })

   } 
    
  } 
}
  