
app.controller("shoppingCart-controller",function(imageFactory,$scope){
   
    $scope.user={
        name:" ",
        password:"",
        email:" "
    }
   
    imageFactory.jsonData(function(response){
       
        $scope.image=response;
        console.log($scope.image[0].imageUrl);
    });
    
  $scope.pushUserData=function(){ 
$scope.compiledData=imageFactory.pushArray($scope.user);
      $scope.user=null;
      
};
   
    
    
});