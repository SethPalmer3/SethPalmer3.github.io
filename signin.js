navigator.geolocation.getCurrentPosition(showPosition);

var showPosition = function(position){
  console.log(position.coords.longitude);
}
