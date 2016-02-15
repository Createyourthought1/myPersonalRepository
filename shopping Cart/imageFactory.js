var app=angular.module("shoppingCart",[]);

app.factory("imageFactory",function($http){
  var compiledData=[];
   var jsonData=function(response){
       
       $http.get("imageFile.json").success(response);
   } ;
       
    var pushArray=function(user){
        compiledData.push(user);
        console.log(compiledData.length);
        return(compiledData);
    };
    return{
     jsonData:jsonData ,  
    pushArray: pushArray
    }   ;
 
    
    
    
});