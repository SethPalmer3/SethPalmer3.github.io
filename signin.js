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
  if (true){
    console.log('work');
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdFWa9Y1IoQn8jadteQzrXKn2MFVJfr5VG5L8NEE0KdGbDleg/viewform?usp=sf_link');
    clearInterval(inter);
  }
  
}

function check(){
  if(long < -122.70, && long > -122.68, lat < 45.48,  && lat >45.46{
    showForm();
  }
}

 var inter = setInterval(check,  41);
navigator.geolocation.getCurrentPosition(setPosition);
