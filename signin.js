var long = null;
var lat = null;
var form = document.getElementsByClassName("frame")[0];
form.style.display = "none";

function setPosition(position){
  console.log(position.coords.longitude);
  console.log(position.coords.latitude);
  long = position.coords.longitude;
  lat = position.coords.latitude;
  
}

function showForm(){
  if (long < -122.688639 && long > -122.690849 && lat > 45.475977 && lat < 45.478369){
    console.log('work');
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdFWa9Y1IoQn8jadteQzrXKn2MFVJfr5VG5L8NEE0KdGbDleg/viewform?usp=sf_link');
    clearInterval(inter);
  }
  
}

function check(){
  if(long != null && lat != null){
    showForm();
  }
}

 var inter = setInterval(check,  41);
navigator.geolocation.getCurrentPosition(setPosition);
