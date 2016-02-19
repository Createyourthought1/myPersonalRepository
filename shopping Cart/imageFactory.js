var app=angular.module("shoppingCart",[]);

app.factory("imageFactory",function($http){
  var compiledData=[];
   var jsonData=function(response){
       
       $http.get("imageFile.json").success(response);
   } ;
       
    var pushArray=function(user){
        compiledData.push(user);
        console.log(compiledData);
        return(compiledData);
    };
    
    var pushNewEntry=function(response){
        
         $http.post("members.json", data).success(response);
        
        
        
    };

    var pushJson=function (data,filename) {

 if (!data) {
    console.error('No data');
    return;
  }

  if (!filename) {
    filename = 'download.json';
  }

  if (typeof data === 'object') {
    data = JSON.stringify(data, undefined, 2);
  }

  var blob = new Blob([data], {type: 'text/json'}),
    e = document.createEvent('MouseEvents'),
    a = document.createElement('a');

  a.download = filename;
  a.href = window.URL.createObjectURL(blob);
  a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
  e.initMouseEvent('click', true, false, window,
      0, 0, 0, 0, 0, false, false, false, false, 0, null);
  a.dispatchEvent(e);
        
        
};
    
    return{
    jsonData:jsonData ,  
    pushArray: pushArray,
    pushJson:pushJson,
    pushNewEntry: pushNewEntry
    }   ;
 
    
    
    
});