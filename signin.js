var long;
var lat;
var form = document.getElementsByTagName("iframe")[0];
form.style.display = "none";

function showPosition(position){
  console.log(position.coords.longitude);
  console.log(position.coords.latitude);
  long = position.coords.longitude;
  lat = position.coords.latitude;
}

function showForm(){
  if (long=-112.6925169){
    console.log('work');
    form.style.display = "block";
  }
  
}

navigator.geolocation.getCurrentPosition(showPosition);
