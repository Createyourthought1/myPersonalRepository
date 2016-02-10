angular.module('myApp', ['ngGeolocation'])
    .controller('geolocCtrl',  function($geolocation, $scope) {
         $geolocation.getCurrentPosition({
            timeout: 60000
         }).then(function(position) {
            $scope.myPosition = position;
         });

        $scope.showMap=function(lat,lng){
            alert("enterd");
        var latlng = new google.maps.LatLng(lat,lng);

   var map=new google.maps.Map(document.getElementById("map"),{
      center: {lat:lat, lng:lng },
      zoom: 8
    });
 var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    title: 'Hello World!'
  });
      alert(latlng);
        };
    } );
