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
  if (long < -122.688639 && long > -122.690849 && lat > 45.475977 && lat < 45.478369){
    console.log('work');
    form.style.display = "block";
    clearInterval(inter);
  }
  
}

function check(){
  if(long != null && lat != null){
    showForm();
  }
}

 var inter = setInterval(check,  41);
navigator.geolocation.getCurrentPosition(showPosition);
