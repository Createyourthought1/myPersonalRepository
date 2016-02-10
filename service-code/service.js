 var app = angular.module('nothing', []);
app.factory('ParserService11', function($http) {

    var jsonData=function(response){

        $http.get('song.json').success(response);
        console.log(response.resultCount);
    };

    return{

        jsonData:jsonData
    };
});
