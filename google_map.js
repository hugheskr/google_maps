//Create a function to make a map!
function makeMap() {
  //var latitude = 51.508742;
  //var longitude = -0.120850;
  var latitude = 47.25
  var longitude = -122.44

  var mapProp = {
    center: new google.maps.LatLng(latitude, longitude),
    zoom: 11,
    //zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    //mapTypeId: google.maps.MapTypeId.HYBRID
    //mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  //Create a new map object
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);


  var marker = new google.maps.Marker({
  	draggable: true,
  	title:"Drag me!",
    animation: google.maps.Animation.DROP,
    icon: 'http://www.triumphtalk.com/data/ttsmilies/Rude/poop.png',
    position: {lat: latitude, lng: longitude}
  });

  //Place the marker on the map
  marker.setMap(map);



  var cityCircle = new google.maps.Circle({
    center: {lat: latitude, lng: longitude},
    radius:2000,
    strokeColor:"#0000FF",
    strokeOpacity:0.8,
    strokeWeight:2,
    fillColor:"#0000FF",
    fillOpacity:0.4
  });

  //Place circle on map
  cityCircle.setMap(map);


  //Bounce function!
  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  };

  //Make the marker bounce when clicked
  marker.addListener('click', toggleBounce);


};

//Event listener to load the map
google.maps.event.addDomListener(window, 'load', makeMap);

