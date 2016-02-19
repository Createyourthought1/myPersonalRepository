
app.controller("shoppingCart-controller",function(imageFactory,$scope){
 var compiledData=[];
  
    imageFactory.jsonData(function(response){
       
        $scope.image=response;
        console.log($scope.image[0].imageUrl);
    });
    
  $scope.pushUserData=function(){ 
      console.log($scope.user);
     var dummyuser=angular.copy($scope.user);
   compiledData.push(dummyuser);
     
          
      console.log(compiledData.length);
   
     imageFactory.pushJson(compiledData);
    
  }
  

      $scope.user=null;
      
});
