
app.controller("shoppingCart-controller",function(imageFactory,$scope){

   $scope.compiledData=[];
    imageFactory.jsonData(function(response){
       
        $scope.image=response;
        console.log($scope.image[0].imageUrl);
    });
    
  $scope.pushUserData=function(){ 
      $scope.compiledData=imageFactory.pushArray($scope.user);
      console.log( $scope.compiledData.length);
   
        imageFactory.pushJson($scope.compiledData);
    
  

      $scope.user=null;
      
};
$scope.addMember = function($http){
            $http.post('members.json', $scope.user).

                success(function(data){
                    console.log('added ' + data);
                    $scope.formData = {};
                  
                    $scope.members.push(data);

                })
                .error(function(data){
                    console.log('Error: ' + data);
                });
                $location.path('/members');

        /*});*/

    };
  
    
    
});