var long = null;
var lat = null;
var form = document.getElementsByClassName("frame")[0];
form.style.display = "none";

function showPosition(position){
  console.log(position.coords.longitude);
  console.log(position.coords.latitude);
  long = position.coords.longitude;
  lat = position.coords.latitude;
  
}

function showForm(){
  if (long < -121 && long > -123){
    console.log('work');
    form.style.display = "block";
  }
  
}

function check(){
  if(long != null && lat != null){
    showForm();
    clearInterval();
  }
}

setInterval(check,  41);
navigator.geolocation.getCurrentPosition(showPosition);
