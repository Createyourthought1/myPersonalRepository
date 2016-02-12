
app.controller("shoppingCart-controller",function(imageFactory,$scope){
  
    
    imageFactory.jsonData(function(response){
       
        $scope.image=response;
        console.log($scope.image[0].imageUrl);
    });
    
    
    
    
});