app.controller('LoginCtrl',function(ParserService11,$scope) {
  alert("hello this is the login Ctroller");
 ParserService11.jsonData(function(response){
     alert(response);
     $scope.songs=response;
     console.log($scope.songs);
 });


});
