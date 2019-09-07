function showPosition(position){
  console.log(position.coords.longitude);
}


navigator.geolocation.getCurrentPosition(showPosition);
