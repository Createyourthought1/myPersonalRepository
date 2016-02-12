var app=angular.module("shoppingCart",[]);

app.factory("imageFactory",function($http){
    
   var jsonData=function(response){
       
       $http.get("imageFile.json").success(response);
   } ;
        
    return{
     jsonData:jsonData   
        
    }   ;
 
    
    
    
});