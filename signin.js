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
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdEUg_LsLy6b8AG3HO_ImFCMbtYV6kd5qQ4qTKtYITUxFc-GA/viewform?usp=sf_link');
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
